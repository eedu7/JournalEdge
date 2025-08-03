CREATE TABLE "symbols" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"symbol" varchar(20) NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" varchar(20),
	"exchange" varchar(100),
	"currency" varchar(10),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
