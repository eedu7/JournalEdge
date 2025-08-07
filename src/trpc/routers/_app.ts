import { symbolsProcedures } from "@/app/(app)/symbols/_server/procedures";
import { tradesProcedures } from "@/trpc/routers/tradeProcedures";
import { z } from "zod";

import { baseProcedure, createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
    hello: baseProcedure
        .input(
            z.object({
                text: z.string(),
            }),
        )
        .query((opts) => {
            return {
                greeting: `hello ${opts.input.text}`,
            };
        }),
    symbols: symbolsProcedures,
    trades: tradesProcedures,
});

// export type definition of API
export type AppRouter = typeof appRouter;
