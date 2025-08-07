"use client";

import { TradeSchema } from "@/app/(app)/trades/schema";
import { ColumnDef } from "@tanstack/table-core";
import { MoreVerticalIcon, PenIcon, TrashIcon } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const FullTradeSchema = TradeSchema.extend({
    id: z.uuid(),
    clerkUserId: z.string(),
});

export const TradesColumns: ColumnDef<z.infer<typeof FullTradeSchema>>[] = [
    {
        accessorKey: "symbol",
        header: "Symbol",
    },
    {
        accessorKey: "tag",
        header: "Tag",
    },
    {
        accessorKey: "entryPrice",
        header: "Entry Price",
    },
    {
        accessorKey: "exitPrice",
        header: "Exit Price",
    },
    {
        accessorKey: "tradeStatus",
        header: "Trade Status",
    },
    {
        accessorKey: "riskToReward",
        header: "Risk to Reward",
    },
    {
        accessorKey: "actualRiskToReward",
        header: "Actual Risk to Reward",
    },
    {
        accessorKey: "riskToTrade",
        header: "Risk to Trade",
    },
    {
        accessorKey: "profitNLoss",
        header: "Profit/Loss",
    },
    {
        accessorKey: "tradeGrade",
        header: "Trade Grade",
    },
    {
        accessorKey: "newsDay",
        header: "News Day",
    },
    {
        accessorKey: "impactOfNewsDay",
        header: "Impact of News Day",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const { id } = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="icon"
                            variant="ghost"
                            className="cursor-pointer"
                        >
                            <MoreVerticalIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {/*TODO: Add edit and delete functionality*/}
                        <DropdownMenuItem className="flex w-full cursor-pointer items-center justify-between">
                            <span>Edit</span>
                            <PenIcon />
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex w-full cursor-pointer items-center justify-between">
                            <span>Delete</span>
                            <TrashIcon />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
