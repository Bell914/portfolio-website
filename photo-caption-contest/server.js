require('dotenv').config();
const crypto = require('crypto');
const express = require('express');
const bcrypt = require('bcrypt');
const NodeCache = require('node-cache');
const { middleware: swaggerMiddleware, handler: swaggerHandler } = require('./swagger');
const { User, Image, Caption } = require('./db');

const app = express();
const port = process.env.PORT || 3000;
const cache = new NodeCache({ stdTTL: 60 });
app.use(express.json());
app.use('/api-docs', swaggerMiddleware, swaggerHandler);

const revokedTokens = new Set();
const sessionSecret = process.env.SESSION_SECRET || 'local-development-only-secret';
const imageInclude = [{ model: Caption, include: [{ model: User, attributes: ['id', 'email'] }] }];

function createToken(user) {
  const payload = Buffer.from(JSON.stringify({ id: user.id, email: user.email })).toString('base64url');
  const signature = crypto.createHmac('sha256', sessionSecret).update(payload).digest('base64url');
  return `${payload}.${signature}`;
}

function authenticate(req, res, next) {
  const [scheme, token] = (req.get('authorization') || '').split(' ');
  if (scheme !== 'Bearer' || !token || revokedTokens.has(token)) return res.status(401).json({ error: 'authentication required' });
  const [payload, signature] = token.split('.');
  const expected = payload && crypto.createHmac('sha256', sessionSecret).update(payload).digest('base64url');
  if (!payload || !signature || signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return res.status(401).json({ error: 'invalid token' });
  try { req.user = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')); } catch { return res.status(401).json({ error: 'invalid token' }); }
  return next();
}

app.get('/', (_req, res) => res.json({ name: 'Photo Caption Contest API', status: 'ok' }));

app.get('/images', async (_req, res, next) => {
  try {
  const cached = cache.get('images');
  if (cached) return res.json(cached);
  const images = await Image.findAll({ include: imageInclude, order: [['id', 'ASC']] });
  cache.set('images', images);
  return res.json(images);
  } catch (error) { return next(error); }
});

app.get('/images/:id', async (req, res, next) => {
  try {
  const image = await Image.findByPk(req.params.id, { include: imageInclude });
  return image ? res.json(image) : res.status(404).json({ error: 'image not found' });
  } catch (error) { return next(error); }
});

app.post('/images/:id/captions', authenticate, async (req, res, next) => {
  try {
  const caption = typeof req.body.caption === 'string' ? req.body.caption.trim() : '';
  if (!caption) return res.status(400).json({ error: 'caption is required' });
  const image = await Image.findByPk(req.params.id);
  if (!image) return res.status(404).json({ error: 'image not found' });
  const entry = await Caption.create({ text: caption, UserId: req.user.id, ImageId: image.id });
  cache.del('images');
  return res.status(201).json(entry);
  } catch (error) { return next(error); }
});

app.post('/auth/register', async (req, res, next) => {
 try {
  const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const password = typeof req.body.password === 'string' ? req.body.password : '';
  if (!email || password.length < 8) return res.status(400).json({ error: 'valid email and 8-character password are required' });
  const passwordHash = await bcrypt.hash(password, 10);
  const user = await User.create({ email, passwordHash });
  return res.status(201).json({ id: user.id, email: user.email });
 } catch (error) { if (error.name === 'SequelizeUniqueConstraintError') return res.status(409).json({ error: 'user already exists' }); return next(error); }
});

app.post('/auth/login', async (req, res, next) => {
 try {
  const email = typeof req.body.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const password = typeof req.body.password === 'string' ? req.body.password : '';
  const user = await User.findOne({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) return res.status(401).json({ error: 'invalid credentials' });
  return res.json({ id: user.id, email: user.email, token: createToken(user) });
 } catch (error) { return next(error); }
});

app.post('/auth/logout', authenticate, (req, res) => {
  revokedTokens.add((req.get('authorization') || '').split(' ')[1]);
  return res.status(204).send();
});

app.use((error, _req, res, _next) => { console.error(error); return res.status(500).json({ error: 'internal server error' }); });

if (require.main === module) app.listen(port, () => console.log(`Photo Caption Contest API listening on ${port}`));
module.exports = app;
