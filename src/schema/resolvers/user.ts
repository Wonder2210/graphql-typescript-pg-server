import { Resolvers } from "../../__generated__/generated-types";
import { User, Pet } from "../../database/models";
import { UserInputError } from "apollo-server-express";

const resolvers: Resolvers = {
  Query: {
    users: async (parent, args, ctx) => {
      const users: User[] = await User.query();
      return users;
    },
    user: async (parent, args, ctx) => {
      const user: User = await User.query().findById(args.id);

      return user;
    },
  },
  User: {
    pets: async (parent, args, ctx) => {
      const {
        loaders: { pets },
      } = ctx;
      return pets.load(parent.id);
    },
  },
  Mutation: {
    createUser: async (parent, args, ctx) => {
      let user: User;
      try {
        user = await User.query().insert({ ...args.user });
      } catch (error) {
        console.log(error, Object.keys(args));
        throw new UserInputError("Bad data", {
          invalidArgs: Object.keys(args),
        });
      }
      return user;
    },
    updateUser: async (parent, { user: { id, ...data } }, ctx) => {
      let user: User = await User.query().patchAndFetchById(id, data);

      return user;
    },
    deleteUser: async (parent, args, ctx) => {
      const deleted = await User.query().deleteById(args.id);
      return "Succesfull deleted";
    },
  },
};

export default resolvers;
