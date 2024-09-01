import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { user } from "./schemas/user";

const schema = defineSchema({
   // authentication-related tables
   ...authTables,

   // user-related tables
   users: user
});

export default schema;
