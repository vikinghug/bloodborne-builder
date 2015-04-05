'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('dungeonLocation', function(table) {
    table.integer('level');
    table.string('description');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('dungeonLocation');
};
