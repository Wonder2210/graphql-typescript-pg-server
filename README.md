
# GraphQL Typescript and PostgreSQL API

This repo is part of my [post](https://dev.to/wonder2210/graphql-typescript-postgresql-api-271g) intended to show how to build an API using PostgreSQL and typescript

## Database

Create two databases on PostgreSQL called, `post` and `post-test`, and add your database credentials to the file `src/database/config.ts` 
in case you might like name the databases with other name in that same file you can rename it
## Run Locally

Clone the project

```bash
  git clone https://github.com/Wonder2210/graphql-typescript-pg-server.git
```

Go to the project directory

```bash
  cd graphql-typescript-pg-server
```

Install dependencies

```bash
  yarn install
```

Migrate Database

```bash
   yarn migrate:up
```

Start the server

```bash
  yarn dev
```


## Running Tests

To run tests, run the following command

```bash
  yarn test:integration
```

