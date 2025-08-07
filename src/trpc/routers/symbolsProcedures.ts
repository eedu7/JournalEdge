import { SymbolsSchema } from "@/app/(app)/symbols/schema";
import { symbols } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { eq } from "drizzle-orm";

export const symbolsProcedures = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {
        const results = await ctx.db.query.symbols.findMany({
            where: eq(symbols.clerkUserId, ctx.user.clerkUserId),
        });

        return results.map(({ createdAt, updatedAt, ...rest }) => ({ ...rest }));
    }),
    add: baseProcedure.input(SymbolsSchema).mutation(async ({ input, ctx }) => {
        await ctx.db.insert(symbols).values({ ...input, clerkUserId: ctx.user.clerkUserId });
        return {
            success: true,
        };
    }),
});
