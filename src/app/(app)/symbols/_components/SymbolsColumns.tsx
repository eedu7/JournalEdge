"use client";

import { SymbolsSchema } from "@/app/(app)/symbols/schema";
import { ColumnDef } from "@tanstack/table-core";
import { z } from "zod";

const FullSymbolSchema = SymbolsSchema.extend({
    id: z.uuid(),
    clerkUserId: z.string(),
});

export const SymbolsColumns: ColumnDef<z.infer<typeof FullSymbolSchema>>[] = [
    {
        accessorKey: "symbol",
        header: "Symbol",
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "exchange",
        header: "Exchange",
    },
    {
        accessorKey: "currency",
        header: "Currency",
    },
];
