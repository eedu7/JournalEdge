"use client";

import React from "react";

import { trpc } from "@/trpc/client";

import { SymbolsColumns } from "@/app/(app)/symbols/_components/SymbolsColumns";
import { SymbolsDataTable } from "@/app/(app)/symbols/_components/SymbolsDataTable";

export const SymbolsDataTableView = () => {
    const [data] = trpc.symbols.getMany.useSuspenseQuery();
    return (
        <SymbolsDataTable
            columns={SymbolsColumns}
            data={data ?? []}
        />
    );
};
