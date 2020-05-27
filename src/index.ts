import express, { Application } from 'express';
import {  ApolloServer , Config } from 'apollo-server-express';
import configuration from './database/knexfile';
import schema from './schema';
import Knex from 'knex';
import{ Model} from 'objection';
const db = Knex(configuration.development);

Model.knex(db);


const app: Application  = express();

const config : Config = {
    schema:schema,
    introspection: true,//these lines are required to use the gui 
    playground: true,//   of playground

}

const server : ApolloServer = new ApolloServer(config);

server.applyMiddleware({
    app,
    path: '/graphql'
  });

app.listen(3000,()=>{// change later to 4000
    console.log("We are running on http://localhost:3000/graphql")
})