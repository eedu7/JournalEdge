"use client";

import React from "react";

import { SymbolsSchema } from "@/app/(app)/symbols/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
            currency: "",
            exchange: "",
            type: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof SymbolsSchema>) => {
        alert(JSON.stringify(values, null, 2));
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 p-2"
            >
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-5">
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
                    <div className="col-start-5 flex h-full w-full items-end">
                        <Button
                            variant="outline"
                            type="button"
                            className="w-full"
                        >
                            Add Symbol
                        </Button>
                    </div>
                </div>
                <div className="flex w-full items-center justify-end">
                    <Button>Add Symbol</Button>
                </div>
            </form>
        </Form>
    );
};
