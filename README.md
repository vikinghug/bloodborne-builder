# blood

A [Sails](http://sailsjs.org) application

## Getting Started
Note: assumes [ne](https://github.com/rylnd/dotfiles/blob/master/.bash_aliases#L96-L97)

```bash
# Install dependencies
npm install

# Create the DB user
createuser -dr bloodborne-server

# Create the databases
ne sails-migrations db:create
# Migrate the database
ne sails-migrations migrate

# Start the server
ne sails lift
```
