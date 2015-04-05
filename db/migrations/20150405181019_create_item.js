'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('item', function(table) {
    table.string('name');
  })
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('item');
};
