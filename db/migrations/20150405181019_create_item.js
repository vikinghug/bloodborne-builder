'use strict';

exports.up = function(knex, Promise) {
  Promise.all([
    knex.schema.createTable('item', function(table) {
      table.string('name');
    })
  ]);
};

exports.down = function(knex, Promise) {
  Promise.all([
    knex.schema.dropTable('item')
  ]);
};
