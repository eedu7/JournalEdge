"use client";

import React from "react";

import { TradeSchema } from "@/app/(app)/trades/schema";
import { trpc } from "@/trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { SymbolsInput } from "@/app/(app)/trades/add/_components/SymbolsInput";

export const AddTradeForm = () => {
    const form = useForm<z.infer<typeof TradeSchema>>({
        resolver: zodResolver(TradeSchema),
        defaultValues: {
            symbol: "",
            tag: "",
            entryPrice: 0,
            exitPrice: 0,
            tradeStatus: "Win",
            riskToReward: 0,
            actualRiskToReward: 0,
            riskToTrade: 0,
            profitNLoss: 0,
            tradeGrade: "A",
            newsDay: false,
            impactOfNewsDay: "positive",
            mistakeDescription: "",
            strategyDescription: "",
            learningDescription: "",
        },
        mode: "all",
    });

    const utils = trpc.useUtils();

    const mutation = trpc.trades.add.useMutation({
        onSuccess: () => {
            utils.trades.getMany.invalidate();
            toast.success("Trade added successfully");
            form.reset();
        },
        onError: (error) => {
            if (error.message) {
                toast.error("Failed to add trade " + error.message);
            } else {
                toast.error("Failed to add trade.");
            }
        },
    });

    const onSubmit = async (values: z.infer<typeof TradeSchema>) => {
        mutation.mutate(values);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
            >
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="symbol"
                        render={({ field }) => (
                            <SymbolsInput
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tag"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Tag</FormLabel>
                                <FormControl>
                                    <Select
                                        value={field.value ?? ""}
                                        onValueChange={field.onChange}
                                        defaultValue={field.value ?? ""}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a tag" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-40">
                                            <SelectItem value="long">Long</SelectItem>
                                            <SelectItem value="short">Short</SelectItem>
                                            <SelectItem value="both">Both</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <FormField
                        control={form.control}
                        name="entryPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Entry Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={field.value}
                                        onChange={(e) => {
                                            field.onChange(e.target.valueAsNumber);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="exitPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Exit Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tradeStatus"
                        render={({ field }) => (
                            <FormItem>
                                <FormItem>
                                    <FormLabel className="text-xs md:text-base">Trade Status</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Win"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    <FormField
                        control={form.control}
                        name="riskToReward"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Risk to Reward</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="actualRiskToReward"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Actual Risk to Reward</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="riskToTrade"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Risk to Trade</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <FormField
                        control={form.control}
                        name="profitNLoss"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Profit & Loss</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="0"
                                        value={field.value}
                                        onChange={(e) => field.onChange(e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="tradeGrade"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Trade Grade</FormLabel>
                                <FormControl>
                                    <Select
                                        value={field.value ?? ""}
                                        onValueChange={field.onChange}
                                        defaultValue={field.value ?? ""}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a grade" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-40">
                                            <SelectItem value="A">A</SelectItem>
                                            <SelectItem value="B">B</SelectItem>
                                            <SelectItem value="C">C</SelectItem>
                                            <SelectItem value="D">D</SelectItem>
                                            <SelectItem value="E">E</SelectItem>
                                            <SelectItem value="F">F</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="newsDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">News Day</FormLabel>
                                <FormControl>
                                    <Select
                                        value={field.value.toString()}
                                        onValueChange={(val) => field.onChange(val === "true")}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="News day" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-40">
                                            <SelectItem value="true">Yes</SelectItem>
                                            <SelectItem value="false">No</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="impactOfNewsDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs md:text-base">Impact of News Day</FormLabel>
                                <FormControl>
                                    <Select
                                        value={field.value ?? ""}
                                        onValueChange={field.onChange}
                                        defaultValue={field.value ?? ""}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a grade" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-40">
                                            <SelectItem value="positive">Positive</SelectItem>
                                            <SelectItem value="negative">Negative</SelectItem>
                                            <SelectItem value="neutral">Neutral</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="learningDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xs md:text-base">Learning Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="mistakeDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xs md:text-base">Mistake Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="strategyDescription"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-xs md:text-base">Strategy Description</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex w-full justify-end">
                    <Button disabled={mutation.isPending}>
                        {mutation.isPending ? (
                            <div className="flex items-center gap-2">
                                <Loader2 className="repeat-infinite animate-spin" />
                                <span>Adding...</span>
                            </div>
                        ) : (
                            "Add trade"
                        )}
                    </Button>
                </div>
            </form>
        </Form>
    );
};
