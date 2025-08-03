"use client";

import React from "react";

import { SymbolsSchema } from "@/app/(app)/symbols/schema";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export const AddSymbolForm = () => {
    const form = useForm<z.infer<typeof SymbolsSchema>>({
        resolver: zodResolver(SymbolsSchema),
        defaultValues: {
            symbol: "",
            name: "",
            currency: "USD",
            exchange: "NASDAQ",
            type: "Equity",
        },
    });

    // TODO: Invalidate the query for `getMany` symbols, after successful
    // const utils = trpc.useUtils();

    const mutation = trpc.symbols.add.useMutation({
        onSuccess: () => {
            form.resetField("symbol");
            form.resetField("name");
            form.setFocus("symbol");
            toast.success("Symbol added successfully");
        },
        onError: () => {
            toast.error("Failed to add symbol");
        },
    });

    const onSubmit = async (values: z.infer<typeof SymbolsSchema>) => {
        mutation.mutate(values);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-2 space-y-4 p-2 md:grid-cols-3 lg:grid-cols-5"
            >
                <FormField
                    name="symbol"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Symbol</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="APL"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Apple"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name="currency"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Currency</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="USD"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="exchange"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Exchange</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Exchange"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="type"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Type</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Type"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex h-full w-full items-center lg:col-start-5 lg:items-end">
                    <Button
                        className="w-full"
                        disabled={mutation.isPending}
                        type="submit"
                    >
                        {mutation.isPending ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="repeat-infinite animate-spin" />
                                <span>Adding...</span>
                            </div>
                        ) : (
                            "Add symbols"
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};
