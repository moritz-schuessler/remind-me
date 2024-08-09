import { pgTable, text } from "drizzle-orm/pg-core";
import { users } from "../auth/schema";

export const reminder = pgTable("reminder", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  text: text("text"),
});
