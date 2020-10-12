import { BatchLoadFn } from "dataloader";
import { Pet, User } from "../database/models";

export const Pets: BatchLoadFn<number, Array<Pet>> = async (ids) => {
  const pets = await Pet.query();

  return ids.map((i) => pets.filter((item) => item.owner_id === i));
};

export const Users: BatchLoadFn<number, Array<User>> = async (ids) => {
  const users = await User.query();

  return ids.map((id) => users.filter((i) => i.id === id));
};
