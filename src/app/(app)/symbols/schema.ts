import { z } from "zod";

export const SymbolsSchema = z.object({
    symbol: z.string().max(20, {
        error: "Symbol must be less than 20 characters",
    }),
    name: z.string().max(255, {
        error: "Name must be less than 255 characters",
    }),
});
