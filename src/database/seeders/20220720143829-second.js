module.exports = {
  up: async (queryInterface) => {
    const second = [];

    for (let index = 1; index < 200; index++) {
      second.push({
        name: `Second ${index}`,
        processed: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      });
    }

    return queryInterface.bulkInsert('second', second);
  },
  down: async (queryInterface) => queryInterface.bulkDelete('second', null, {}),
};
