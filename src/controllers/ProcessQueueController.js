const db = require('../config/db.js');

const First = db.first;

class ProcessQueueController {
  async get(_req, res) {
    return res.json({ message: 'It works' });
  }

  async reset(_req, res) {
    await First.update({ processed: null }, { where: {} });

    return res.json({ message: 'Removed', first: First.findAll() });
  }
}

module.exports = new ProcessQueueController();
