"use client";

import React from "react";

import { trpc } from "@/trpc/client";

import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SymbolsInputProps {
    value: string;
    onChange: (value: string) => void;
}

export const SymbolsInput = ({ value, onChange }: SymbolsInputProps) => {
    const { data: symbolsData } = trpc.symbols.getMany.useQuery();

    return (
        <FormItem className="w-full text-xs md:text-base">
            <FormLabel>Symbols</FormLabel>
            <FormControl>
                <Select
                    value={value}
                    onValueChange={onChange}
                    defaultValue={value}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue
                            className="w-full"
                            placeholder="Select a symbol"
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {symbolsData?.map((symbol) => (
                            <SelectItem
                                key={symbol.id}
                                value={symbol.id}
                            >
                                {symbol.symbol}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </FormControl>
            <FormMessage />
        </FormItem>
    );
};
