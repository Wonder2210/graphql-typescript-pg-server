import { server, startDb, cleanDb } from "./utils/server";
import { createTestClient } from "apollo-server-testing";
import {
  GET_USERS,
  GET_PETS,
  GET_USERS_AND_PETS,
  CREATE_USER,
  CREATE_PET,
  UPDATE_USER,
  DELETE_USER,
} from "./utils/queries";

beforeAll(() => {
  return startDb();
});
afterAll(()=>{
  return cleanDb();
})

test("query users", async () => {
  const serverTest = server();
  const { query } = createTestClient(serverTest);

  const res = await query({ query: GET_USERS });

  expect(res).toMatchSnapshot();
});

test("query pets", async () => {
  const serverTest = server();
  const { query } = createTestClient(serverTest);

  const res = await query({ query: GET_PETS });

  expect(res).toMatchSnapshot();
});

test("query users and its pets", async () => {
  const serverTest = server();
  const { query } = createTestClient(serverTest);

  const res = await query({ query: GET_USERS_AND_PETS });

  expect(res).toMatchSnapshot();
});

test("create user ", async () => {
  const serverTest = server();
  const { mutate } = createTestClient(serverTest);

  const res = await mutate({
    mutation: CREATE_USER,
    variables: {
      name: "Wonder",
      country_code: "ve",
    },
  });

  expect(res).toMatchSnapshot();
});

test("create pet", async () => {
  const serverTest = server();
  const { mutate } = createTestClient(serverTest);

  const res = await mutate({
    mutation: CREATE_PET,
    variables: {
      name: "Optimus",
      owner_id: 1,
      specie: "MAMMALS",
    },
  });

  expect(res).toMatchSnapshot();
});

test("update user", async () => {
  const serverTest = server();
  const { mutate } = createTestClient(serverTest);

  const res = await mutate({
    mutation: UPDATE_USER,
    variables: {
      id: 1,
      name: "wilson",
    },
  });

  expect(res).toMatchSnapshot();
});

test("delete user", async () => {
  const serverTest = server();
  const { mutate } = createTestClient(serverTest);

  const res = await mutate({
    mutation: DELETE_USER,
    variables: {
      id: 2,
    },
  });

  expect(res).toMatchSnapshot();
});
