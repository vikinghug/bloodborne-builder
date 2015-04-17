/**
* DungeonLocation.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    level: {
      type: 'integer',
      required: true
    },

    dungeon: {
      model: 'Dungeon',
      required: true
    },

    description: {
      type: "string"
    },

    chalice: {
      model: 'Item'
    },

    rites: {
      collection: 'Item',
      via: 'dungeonRites'
    },

    items: {
      collection: 'Item',
      via: 'dungeonLocations'
    },

    toJSON: function() {
      var location = this.toObject();

      location.items = this.items || [];

      return location;
    }
  }
};
