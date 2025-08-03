import { cache } from "react";

import { auth } from "@clerk/nextjs/server";
import { initTRPC } from "@trpc/server";

import { db } from "@/utils/drizzle";

export const createTRPCContext = cache(async () => {
    /**
     * @see: https://trpc.io/docs/server/context
     */
    return { userId: "user_123" };
});

// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.create({
    /**
     * @see https://trpc.io/docs/server/data-transformers
     */
    // transformer: superjson,
});

// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure.use(async ({ next }) => {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Not logged in");
    }

    return next({ ctx: { db, user: { clerkUserId: userId } } });
});
