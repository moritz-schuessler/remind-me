import { createReminder, deleteReminder, getReminders } from "@/data/reminder";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const Reminders = async () => {
  const reminders = await getReminders();

  return (
    <>
      {!!reminders.length &&
        reminders.map((reminder) => {
          return (
            <div key={reminder.id}>
              <div>{reminder.text}</div>
              <form
                action={async () => {
                  "use server";
                  deleteReminder(reminder.id);
                  revalidatePath("/");
                  redirect("/");
                }}
              >
                <button type="submit">Delete</button>
              </form>
            </div>
          );
        })}
      <form
        action={async (formData) => {
          "use server";
          createReminder(formData);
          revalidatePath("/");
          redirect("/");
        }}
      >
        <input type="text" name="text" id="text" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Reminders;
