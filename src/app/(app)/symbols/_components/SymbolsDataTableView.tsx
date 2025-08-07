"use client";

import React from "react";

import { trpc } from "@/trpc/client";

import { DataTable } from "@/components/DataTable";
import { SymbolsColumns } from "@/app/(app)/symbols/_components/SymbolsColumns";

export const SymbolsDataTableView = () => {
    const [data] = trpc.symbols.getMany.useSuspenseQuery();
    return (
        <DataTable
            columns={SymbolsColumns}
            data={data ?? []}
        />
    );
};
