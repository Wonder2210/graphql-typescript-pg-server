import express, { Application } from 'express';
import {  ApolloServer , Config } from 'apollo-server-express';
import schema from './schema';
import Knex from 'knex';
import{ Model} from 'objection';
import dbconfig from './database/config';
const db = Knex(dbconfig["development"]);
import DataLoader from 'dataloader';
import {Pets,Users} from './utils/loaders';

Model.knex(db);


console.log(process.env.DATABASE);

const app: Application  = express();

const config : Config = {
    schema:schema,
    introspection: true,//these lines are required to use the gui 
    playground: true,//   of playground
    tracing:true,
    context:{
        loaders:{
            users: new DataLoader(Users),
            pets: new DataLoader(Pets),
        }
    }

}

const server : ApolloServer = new ApolloServer(config);

server.applyMiddleware({
    app,
    path: '/graphql'
  });

app.listen(3000,()=>{// change later to 4000
    console.log("We are running on http://localhost:3000/graphql")
})