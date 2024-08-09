import { signOut } from "@/auth";
import Reminders from "./reminders";

const Home = async () => {
  return (
    <>
      <h1>Remind Me</h1>
      <Reminders />

      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Signout</button>
      </form>
    </>
  );
};

export default Home;
