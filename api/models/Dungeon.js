/**
* Dungeon.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true
    },

    description: {
      type: "string"
    },

    glyph: {
      type: "string",
      required: true,
      unique: true
    },

    locations: {
      collection: 'DungeonLocation',
      via: 'dungeon'
    },

    toJSON: function() {
      var dungeon = this.toObject();

      dungeon.locations = this.locations || [];

      return dungeon;
    }
  }
};
