"use client";

import { ColumnDef } from "@tanstack/table-core";
import { MoreVerticalIcon, PenIcon, TrashIcon } from "lucide-react";



import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";





// const FullTradeSchema = TradeSchema.extend({

// const FullTradeSchema = TradeSchema.extend({

// const FullTradeSchema = TradeSchema.extend({

// const FullTradeSchema = TradeSchema.extend({

// const FullTradeSchema = TradeSchema.extend({

// const FullTradeSchema = TradeSchema.extend({

// const FullTradeSchema = TradeSchema.extend({
//     id: z.uuid(),
//     clerkUserId: z.string(),
// });

type TradeRow = {
    id: string;
    symbolName: string;
    clerkUserId: string;
    tag: string | null;
    entryPrice: number | null;
    exitPrice: number | null;
    tradeStatus: string | null;
    riskToReward: number | null;
    actualRiskToReward: number | null;
    riskToTrade: number | null;
    profitNLoss: number | null;
    tradeGrade: string | null;
    newsDay: boolean | null;
    impactOfNewsDay: string | null;
    mistakeDescription: string | null;
};

// export const TradesColumns: ColumnDef<z.infer<typeof FullTradeSchema>>[] = [
export const TradesColumns: ColumnDef<TradeRow>[] = [
    {
        accessorKey: "symbolName",
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
