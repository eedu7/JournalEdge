import { TradeSchema } from "@/app/(app)/trades/schema";
import { trades } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { eq } from "drizzle-orm";

export const tradesProcedures = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {
        const results = await ctx.db.query.trades.findMany({
            where: eq(trades.clerkUserId, ctx.user.clerkUserId),
        });

        return results.map(({ createdAt, updatedAt, ...rest }) => ({ ...rest }));
    }),
    add: baseProcedure.input(TradeSchema).mutation(async ({ input, ctx }) => {
        console.table(input);
        await ctx.db.insert(trades).values({ ...input, clerkUserId: ctx.user.clerkUserId });
        return {
            success: true,
        };
    }),
});
