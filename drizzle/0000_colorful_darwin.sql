CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` integer NOT NULL,
	`email` text NOT NULL,
	`createdAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updatedAt` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `email_idx` ON `users_table` (`email`);