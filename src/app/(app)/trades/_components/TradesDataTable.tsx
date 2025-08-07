"use client";

import React from "react";

import { trpc } from "@/trpc/client";

import { DataTable } from "@/components/DataTable";
import { TradesColumns } from "@/app/(app)/trades/_components/TradesColumns";

export const TradesDataTable = () => {
    const [data] = trpc.trades.getMany.useSuspenseQuery();
    return (
        <DataTable
            columns={TradesColumns}
            data={data}
        />
    );
};
