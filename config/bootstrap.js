module.exports.bootstrap = function(cb) {
  sails.services.passport.loadStrategies();

  var createItem = function(dungeon) {
    var dungeonLocationID = _.first(dungeon.locations).id;

    DungeonLocation.findOne(dungeonLocationID).exec(function(err, dungeonLocation) {
      dungeonLocation.items.add({
        name: 'item 1'
      });

      dungeonLocation.save(function(err) {
        if (err) return console.warn(err);
      });
    });
  };

  var createDungeonLocation = function(err, dungeon) {
    if (err) return console.warn(err);

    dungeon.locations.add({
      level: 1,
      description: 'location 1'
    });

    dungeon.save(function(err, dungeon) {
      if (err) return console.warn(err);
      createItem(dungeon);
    });
  };

  var createDungeon = function() {
    Dungeon.create({
      id: 1,
      name: 'dungeon 1',
      glyph: 'fow420c'
    }).exec(createDungeonLocation)
  };

  if (!sails.config.migrating) {
    Dungeon.findOne(1).populate('locations').exec(function(err, dungeon) {
      if (dungeon) {
        if (!dungeon.locations.length) {
          createDungeonLocation(null, dungeon);
        }
      } else {
        createDungeon();
      }
    });
  }

  cb();
};
