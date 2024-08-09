import "@/lib/envConfig";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/data/**/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
