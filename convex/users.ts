import { query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const getCurrentLoggedInUser = query({
   args: {},
   handler: async (ctx) => {
      const userId = await getAuthUserId(ctx);
      if (!userId) return null;

      const user = await ctx.db.get(userId);
      if (!user) return null;

      const { _id, name, email, image, phone, role } = user;
      return { id: _id, name, email, image, phone, role };
   }
});
