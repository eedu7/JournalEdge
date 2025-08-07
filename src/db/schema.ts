import { boolean, date, integer, pgTable, text, time, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const symbols = pgTable("symbols", {
    id: uuid("id").primaryKey().defaultRandom(),
    symbol: varchar("symbol", { length: 20 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    clerkUserId: varchar("clerk_user_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
//
// export const tags = pgTable("tags", {
//     id: uuid("id").primaryKey().defaultRandom(),
//     name: varchar("name", { length: 255 }).notNull(),
//     description: varchar("name", { length: 255 }).notNull(),
//     clerkUserId: varchar("clerk_user_id", { length: 255 }).notNull(),
//     createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
//     updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
// });

// TODO: Make trade status, an enum or a database table
// TODO: Make tag, an enum or a database table
// TODO: Make trade grade, an enum or a database table
// TODO: Make impactOfNewsDay, an enum or a database table

export const trades = pgTable("trades", {
    id: uuid("id").primaryKey().defaultRandom(),
    symbol: uuid("symbol_id")
        .references(() => symbols.id)
        .notNull(),
    tag: varchar("tag", { length: 30 }),
    entryPrice: integer("entry_price"),
    exitPrice: integer("exit_price"),
    entryDate: date("entry_date"),
    exitDate: date("exit_date"),
    entryTime: time("entry_time"),
    exitTime: time("exit_time"),
    tradeStatus: varchar("trade_status", { length: 30 }),
    riskToReward: integer("risk_to_reward"),
    actualRiskToReward: integer("actual_risk_to_reward"),
    riskToTrade: integer("risk_to_trade"),
    profitNLoss: integer("profit_n_loss"),
    tradeGrade: varchar("trade_grade", { length: 30 }),
    newsDay: boolean("news_day"),
    impactOfNewsDay: varchar("impact_of_news_day", { length: 30 }),
    mistakeDescription: text("mistake_description"),
    strategyDescription: text("strategy_description"),
    learningDescription: text("learning_description"),
    clerkUserId: varchar("clerk_user_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
