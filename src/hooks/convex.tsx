import { FunctionReference } from "convex/server";
import { useQuery as convexQuery } from "convex/react";
import { api } from "@convex/_generated/api";

interface queryProps {
   queryFn: FunctionReference<"query">;
   enabled: boolean;
}

export function useQuery({ queryFn, enabled = true }: queryProps) {
   const data = enabled ? (convexQuery(queryFn) ?? null) : null;
   const isLoading = enabled && data === undefined;
   return { data, isLoading };
}

export function useUser() {
   const data = convexQuery(api.users.getCurrentLoggedInUser);
   const isLoading = data === undefined;
   return { user: isLoading ? null : data, isLoading };
}
