'use strict';

exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('dungeon', function(table) {
      table.increments('id');

      table.string('glyph');
      table.string('name');
      table.string('description');
      table.timestamp('createdAt');
      table.timestamp('updatedAt');
    })
  ]);
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('dungeon')
  ]);
};
