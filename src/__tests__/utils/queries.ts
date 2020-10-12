import gql from "graphql-tag";

export const GET_USERS = gql`
  query getUsers {
    users {
      id
      full_name
      country_code
    }
  }
`;

export const GET_USERS_AND_PETS = gql`
  query getUsersAndItsPets {
    users {
      id
      full_name
      country_code
      pets {
        id
        name
        specie
      }
    }
  }
`;

export const GET_PETS = gql`
  query getPets {
    pets {
      id
      name
      owner_id
      specie
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $country_code: String!) {
    createUser(user: { full_name: $name, country_code: $country_code }) {
      id
      full_name
      country_code
    }
  }
`;
export const CREATE_PET = gql`
  mutation CreatePet($name: String!, $owner_id: Int!, $specie: Species!) {
    createPet(pet: { name: $name, owner_id: $owner_id, specie: $specie }) {
      id
      name
      specie
    }
  }
`;

export const DELETE_PET = gql`
  mutation DeletePet($id: Int!) {
    deletePet(id: $id) {
      String
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id)
  }
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: Int!, $name: String, $country_code: String) {
    updateUser(
      user: { id: $id, full_name: $name, country_code: $country_code }
    ) {
      id
      full_name
      country_code
    }
  }
`;

export const UPDATE_PET = gql`
  mutation UpdatePet($id: Int!, $name: String!) {
    updatePet(pet: { id: $id, name: $name }) {
      id
      name
      owner_id
    }
  }
`;
