import "@/lib/envConfig";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";

import * as authSchema from "./auth/schema";
import * as reminderSchema from "./reminder/schema";

export const db = drizzle(sql, {
  schema: { ...authSchema, ...reminderSchema },
});
