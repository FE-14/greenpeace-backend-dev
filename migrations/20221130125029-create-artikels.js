'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Artikels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      authorName: {
        type: Sequelize.STRING
      },
      postDescription: {
        type: Sequelize.TEXT
      },
      postContent: {
        type: Sequelize.TEXT
      },
      tags_1: {
        type: Sequelize.STRING
      },
      tags_2: {
        type: Sequelize.STRING
      },
      tags_3: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Artikels');
  }
};