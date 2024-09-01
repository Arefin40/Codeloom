import { v } from "convex/values";
import { defineTable } from "convex/server";

export const user = defineTable({
   name: v.optional(v.string()),
   image: v.optional(v.string()),
   email: v.optional(v.string()),
   emailVerificationTime: v.optional(v.number()),
   phone: v.optional(v.string()),
   phoneVerificationTime: v.optional(v.number()),
   isAnonymous: v.optional(v.boolean()),
   role: v.optional(
      v.union(
         v.literal("student"),
         v.literal("instructor"),
         v.literal("moderator"),
         v.literal("admin")
      )
   )
}).index("email", ["email"]);
