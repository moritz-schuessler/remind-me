import "server-only";
import { auth } from "@/auth";
import { db } from "@/data";
import { reminder } from "./schema";
import { and, eq } from "drizzle-orm";

const getReminders = async () => {
  const session = await auth();

  const userId = session!.user!.id!;

  return await db.select().from(reminder).where(eq(reminder.userId, userId));
};

const createReminder = async (formData: FormData) => {
  const session = await auth();

  const userId = session!.user!.id!;
  const text = formData.get("text");

  if (!text) return null;

  await db.insert(reminder).values({
    userId: userId.toString(),
    text: text.toString(),
  });
};

const deleteReminder = async (reminderId: string) => {
  const session = await auth();

  const userId = session!.user!.id!;

  await db
    .delete(reminder)
    .where(and(eq(reminder.id, reminderId), eq(reminder.userId, userId)));
};

export { getReminders, createReminder, deleteReminder };
