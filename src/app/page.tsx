import { auth, signOut } from "@/auth";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1>Remind Me</h1>
      <p> Hello {!!session!.user && session!.user.email}!</p>
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
