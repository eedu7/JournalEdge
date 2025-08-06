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
        },
    });

    // TODO: Invalidate the query for `getMany` symbols, after successful
    const utils = trpc.useUtils();

    const mutation = trpc.symbols.add.useMutation({
        onSuccess: () => {
            form.resetField("symbol");
            form.resetField("name");
            form.setFocus("symbol");
            utils.symbols.getMany.invalidate();
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
                className="space-y-8"
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

                <Button
                    className="w-full"
                    disabled={mutation.isPending}
                    type="submit"
                    onClick={form.handleSubmit(onSubmit)}
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
            </form>
        </Form>
    );
};
