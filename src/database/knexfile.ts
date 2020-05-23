require('ts-node/register');

module.exports = {
  development:{
    client: 'pg',
    connection: {
        database: "post",
        user: "postgres",
        password: "root"
      },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations'
    },
    timezone: 'UTC'
  },
  testing:{
    client: 'pg',
    connection: {
        database: "my_db",
        user: "username",
        password: "password"
      },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations'
    },
    timezone: 'UTC'
  },
  production:{
    client: 'pg',
    connection: {
        database: "my_db",
        user: "username",
        password: "password"
      },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'migrations'
    },
    timezone: 'UTC'
  }
};
