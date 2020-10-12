import UserResolvers from "./src/schema/resolvers/user";
import { mockResolver } from "./src/__tests__/utils/types_resolvers";
const user = mockResolver(UserResolvers.Query!.user!);

let userC = user(undefined, { id: 1 }, null);
