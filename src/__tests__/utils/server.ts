import { ApolloServer, Config } from "apollo-server-express";
import Knex from "knex";
import { Model } from "objection";
import dbconfig from "../../database/config";
import DataLoader from "dataloader";
import schema from "../../schema";
import { Pets, Users } from "../../utils/loaders";
import dbCleaner from "knex-cleaner";

const db = Knex(dbconfig["testing"]);
export const startDb = () => {

  Model.knex(db);
};

export const stopDB = () => {
  Model.knex().destroy();
};

export const cleanDb= async ()=>{
  const options = {
    mode: 'truncate', 
    restartIdentity: true, 
  }
 return await dbCleaner.clean(db,options);
}

const config: Config = {
  schema: schema,
  context: {
    loaders: {
      users: new DataLoader(Users),
      pets: new DataLoader(Pets),
    },
  },
};

export const server: () => ApolloServer = () => new ApolloServer(config);
