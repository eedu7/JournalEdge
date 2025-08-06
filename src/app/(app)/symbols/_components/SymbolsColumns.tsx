"use client";

import { SymbolsSchema } from "@/app/(app)/symbols/schema";
import { ColumnDef } from "@tanstack/table-core";
import { MoreVerticalIcon, PenIcon, TrashIcon } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        id: "actions",
        cell: ({ row }) => {
            const { id } = row.original;
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            size="icon"
                            variant="ghost"
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
