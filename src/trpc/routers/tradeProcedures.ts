import { TradeSchema } from "@/app/(app)/trades/schema";
import { symbols, trades } from "@/db/schema";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";
import { eq } from "drizzle-orm";

export const tradesProcedures = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {
        const results = await ctx.db
            .select({
                id: trades.id,
                tag: trades.tag,
                entryPrice: trades.entryPrice,
                exitPrice: trades.exitPrice,
                tradeStatus: trades.tradeStatus,
                riskToReward: trades.riskToReward,
                actualRiskToReward: trades.actualRiskToReward,
                riskToTrade: trades.riskToTrade,
                profitNLoss: trades.profitNLoss,
                tradeGrade: trades.tradeGrade,
                newsDay: trades.newsDay,
                impactOfNewsDay: trades.impactOfNewsDay,
                mistakeDescription: trades.mistakeDescription,
                strategyDescription: trades.strategyDescription,
                learningDescription: trades.learningDescription,
                createdAt: trades.createdAt,
                updatedAt: trades.updatedAt,
                // From the joined symbols table
                symbolName: symbols.symbol,
            })
            .from(trades)
            .innerJoin(symbols, eq(trades.symbol, symbols.id))
            .where(eq(trades.clerkUserId, ctx.user.clerkUserId));

        return results;
    }),
    add: baseProcedure.input(TradeSchema).mutation(async ({ input, ctx }) => {
        console.table(input);
        await ctx.db.insert(trades).values({ ...input, clerkUserId: ctx.user.clerkUserId });
        return {
            success: true,
        };
    }),
});
