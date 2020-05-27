import {Model} from 'objection';
import {Maybe} from '../../__generated__/generated-types';
import Pet from './Pet';



class User extends Model{
    static tableName = "users";
    id! : number;
    full_name!: Maybe<string>;
    country_code! : Maybe<string>;
    created_at?:string;
    pets?:Pet[];

    static jsonSchema = {
        type:'object',
        required:['full_name'],

        properties:{
            id: { type:'integer'},
            full_name:{type :'string', min:1, max :255},
            country_code:{type :'string', min:1, max :255},
            created_at:{type :'string', min:1, max :255}
        }
    }

    static relationMappings =()=>({
        pets: {
            relation: Model.HasManyRelation,
           modelClass: Pet,
            join: {
              from: 'users.id',
              to: 'pets.owner_id'
            }
          }
    })
}

export default User;