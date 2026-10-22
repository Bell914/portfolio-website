const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

let nextId = 1;
const envelopes = [];

function findEnvelope(id) {
  return envelopes.find((envelope) => envelope.id === Number(id));
}

function validateEnvelope(body) {
  return body && typeof body.title === 'string' && body.title.trim() &&
    Number.isFinite(Number(body.budget)) && Number(body.budget) >= 0;
}

app.get('/', (_req, res) => res.send('Hello, World'));
app.get('/envelopes', (_req, res) => res.json(envelopes));

app.post('/envelopes', (req, res) => {
  if (!validateEnvelope(req.body)) return res.status(400).json({ error: 'title and non-negative budget are required' });
  const envelope = { id: nextId++, title: req.body.title.trim(), budget: Number(req.body.budget) };
  envelopes.push(envelope);
  res.status(201).json(envelope);
});

app.get('/envelopes/:id', (req, res) => {
  const envelope = findEnvelope(req.params.id);
  return envelope ? res.json(envelope) : res.status(404).json({ error: 'envelope not found' });
});

app.put('/envelopes/:id', (req, res) => {
  const envelope = findEnvelope(req.params.id);
  if (!envelope) return res.status(404).json({ error: 'envelope not found' });
  if (!validateEnvelope(req.body)) return res.status(400).json({ error: 'title and non-negative budget are required' });
  envelope.title = req.body.title.trim();
  envelope.budget = Number(req.body.budget);
  res.json(envelope);
});

app.delete('/envelopes/:id', (req, res) => {
  const index = envelopes.findIndex((envelope) => envelope.id === Number(req.params.id));
  if (index < 0) return res.status(404).json({ error: 'envelope not found' });
  res.json(envelopes.splice(index, 1)[0]);
});

app.post('/envelopes/transfer/:from/:to', (req, res) => {
  const from = findEnvelope(req.params.from);
  const to = findEnvelope(req.params.to);
  const amount = Number(req.body.amount);
  if (!from || !to || from === to || !Number.isFinite(amount) || amount <= 0) return res.status(400).json({ error: 'invalid transfer' });
  if (from.budget < amount) return res.status(400).json({ error: 'insufficient funds' });
  from.budget -= amount;
  to.budget += amount;
  res.json({ from, to });
});

if (require.main === module) app.listen(port, () => console.log(`Personal Budget API listening on ${port}`));
module.exports = app;
