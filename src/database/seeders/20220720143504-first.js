module.exports = {
  up: async (queryInterface) => {
    const first = [];

    for (let index = 1; index < 100; index++) {
      first.push({
        name: `First ${index}`,
        processed: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      });
    }

    return queryInterface.bulkInsert('first', first);
  },
  down: async (queryInterface) => queryInterface.bulkDelete('first', null, {}),
};
