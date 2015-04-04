/**
* Classes.js
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

    vitality: {
      type: "integer",
      required: true
    },

    endurance: {
      type: "integer",
      required: true
    },

    strength: {
      type: "integer",
      required: true
    },

    skill: {
      type: "integer",
      required: true
    },

    bloodtinge: {
      type: "integer",
      required: true
    },

    arcane: {
      type: "integer",
      required: true
    },

    bloodEchoes: {
      type: "integer",
      required: true
    },

    level: {
      type: "integer",
      required: true
    },

  }
};

