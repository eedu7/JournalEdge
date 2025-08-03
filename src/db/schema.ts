import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const symbols = pgTable("symbols", {
    id: uuid("id").primaryKey().defaultRandom(),
    symbol: varchar("symbol", { length: 20 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    type: varchar("type", { length: 20 }),
    exchange: varchar("exchange", { length: 100 }),
    currency: varchar("currency", { length: 10 }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
