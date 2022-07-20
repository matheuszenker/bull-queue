const db = require('../config/db.js');
const Queue = require('bull');

const First = db.first;
const mainQueue = new Queue('main-queue');

class CreateQueue {
  create = async () => {
    const firsts = await First.findAll();

    mainQueue.process(function (job, done) {
      for (const row of firsts) {
        setTimeout(() => {
          row.update({ processed: new Date() });
        }, 5000);
      }

      done();
    });

    mainQueue.add();
  };
}

module.exports = new CreateQueue();
