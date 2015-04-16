'use strict';

exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('class', function(table) {
      table.increments('id');

      table.string('name');
      table.integer('vitality');
      table.integer('endurance');
      table.integer('strength');
      table.integer('skill');
      table.integer('bloodtinge');
      table.integer('arcane');
      table.integer('bloodEchoes');
      table.integer('level');

      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    })
  ]);
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('class')
  ]);
};
