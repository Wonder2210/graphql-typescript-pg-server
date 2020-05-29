
import {Pet,User} from '../../database/models';
import {Resolvers} from '../../__generated__/generated-types';
import {UserInputError} from 'apollo-server-express';


const resolvers : Resolvers = {
    Query:{
        pet:async (parent,args,ctx)=>{
            const pet:Pet= await Pet.query().findById(args.id);

             return pet;          
        },
        pets: async (parent,args,ctx)=>{
            const pets:Pet[]= await Pet.query();

            return pets;

        }
    },
    Pet:{
        owner:async(parent,args,ctx)=>{
            const owner : User = await Pet.relatedQuery("owner").for(parent.id).first();

            return owner;
        }
    },
    Mutation:{
        createPet:async (parent,args,ctx)=>{
            let pet: Pet;
            try {
                 pet  = await Pet.query().insert({...args.pet});
               
            } catch (error) {
                throw new UserInputError("Bad user input fields required",{
                    invalidArgs: Object.keys(args),
                  });
                
            }
            return pet;
        },
        updatePet:async (parent,{pet:{id,...data}},ctx)=>{
            const pet : Pet = await Pet.query()
                                    .patchAndFetchById(id,data);

            return pet;
        },
        deletePet:async (parent,args,ctx)=>{
            const pet = await Pet.query().deleteById(args.id);
            return "Successfully deleted"
        },
    }
}


export default resolvers;