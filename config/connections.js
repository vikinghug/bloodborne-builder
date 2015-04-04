module.exports.connections = {
  localDiskDb: {
    adapter: 'sails-disk'
  },

  postgres: {
    adapter: 'sails-postgresql',
    host: 'localhost',
    user: 'bloodborne-builder',
    password: 'bloodborne-builder',
    database: 'bloodborne-builder-dev'
  }
};
