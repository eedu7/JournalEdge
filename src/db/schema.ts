import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const symbols = pgTable("symbols", {
    id: uuid("id").primaryKey().defaultRandom(),
    symbol: varchar("symbol", { length: 20 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    clerkUserId: varchar("clerk_user_id", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
