import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const symbolsProcedures = createTRPCRouter({
    getMany: baseProcedure.query(async ({ ctx }) => {
        return await ctx.db.query.symbols.findMany();
    }),
});
