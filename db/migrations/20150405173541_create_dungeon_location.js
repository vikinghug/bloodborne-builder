'use strict';

exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('dungeonLocation', function(table) {
      table.integer('level');
      table.string('description');
    })
  ]);
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('dungeonLocation')
  ]);
};
