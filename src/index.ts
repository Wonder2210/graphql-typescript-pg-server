import express, { Application } from 'express';
import {  ApolloServer , Config } from 'apollo-server-express';
import config from './database/knexfile';


const app: Application  = express();

const schema = `
    type User{
        name: String
    }

    type Query {
        user:User
    }
`
const config : Config = {
    typeDefs:schema,
    resolvers : {
        Query:{
            user:(parent,args,ctx)=>{
                return { name:"WOnder"}
            }
        }
    },
    introspection: true,//these lines are required to use the gui 
    playground: true,//   of playground

}

const server : ApolloServer = new ApolloServer(config);

server.applyMiddleware({
    app,
    path: '/graphql'
  });

app.listen(3000,()=>{
    console.log("We are running on http://localhost:3000/graphql")
})