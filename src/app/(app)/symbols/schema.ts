import { z } from "zod";

export const SymbolsSchema = z.object({
    symbol: z.string().max(20, {
        error: "Symbol must be less than 20 characters",
    }),
    name: z.string().max(255, {
        error: "Name must be less than 255 characters",
    }),
    type: z
        .string()
        .max(20, {
            error: "Type must be less than 20 characters",
        })
        .nullable(),
    exchange: z
        .string()
        .max(100, {
            error: "Exchange must be less than 100 characters",
        })
        .nullable(),
    currency: z
        .string()
        .max(10, {
            error: "Currency must be less than 10 characters",
        })
        .nullable(),
});
