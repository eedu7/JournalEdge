CREATE TABLE "trades" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"symbol_id" uuid NOT NULL,
	"entry_price" integer,
	"exit_price" integer,
	"trade_status" varchar(30),
	"risk_to_reward" integer,
	"actual_risk_to_reward" integer,
	"risk_to_trade" integer,
	"profit_n_loss" integer,
	"trade_grade" varchar(30),
	"news_day" boolean,
	"impact_of_news_day" varchar(30),
	"mistake_description" text,
	"strategy_description" text,
	"learning_description" text
);
--> statement-breakpoint
ALTER TABLE "trades" ADD CONSTRAINT "trades_symbol_id_symbols_id_fk" FOREIGN KEY ("symbol_id") REFERENCES "public"."symbols"("id") ON DELETE no action ON UPDATE no action;