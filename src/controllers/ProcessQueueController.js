const db = require('../config/db.js');
const CreateQueue = require('../services/CreateQueue');

const First = db.first;

class ProcessQueueController {
  async get(_req, res) {
    // await CreateQueue.create();

    return res.json({ message: 'It works' });
  }

  async reset(_req, res) {
    await First.update({ processed: null }, { where: {} });

    return res.json({ message: 'Removed', first: First.findAll() });
  }
}

module.exports = new ProcessQueueController();
