const formidable = require('formidable');
const { create, get, remove } = require('../model/todo');

exports.create = (req, res) => {
  const form = formidable({});
  form.parse(req, async (err, fields) => {
    const description = Array.isArray(fields.description) ? fields.description[0] : fields.description;
    if (err || !description) return res.status(400).json({ error: 'Description is required' });
    try {
      const result = await create(description);
      return res.status(201).json({ data: result.rows[0] });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  });
};

exports.read = async (_req, res) => {
  try {
    const result = await get();
    return res.json({ data: result.rows });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.removeTodo = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await remove(id);
    return res.status(200).json({ data: id });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
