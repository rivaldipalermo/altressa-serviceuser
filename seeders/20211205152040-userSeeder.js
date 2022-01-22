const bcrypt = require('bcrypt');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin',
        profession: 'Admin Micro',
        role: 'admin',
        email: 'admin@gmail.com',
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Rivaldi Palermo',
        profession: 'BackEnd Developer',
        role: 'student',
        email: 'rivaldipalermo@gmail.com',
        password: await bcrypt.hash('qwerty123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('users', null, {});
  }
};
