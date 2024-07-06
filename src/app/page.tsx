import { auth, signIn, signOut } from "@/auth";

const Home = async () => {
  const session = await auth();

  if (!session) {
    return <SignIn />;
  }

  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <h1>Remind Me</h1>
      Hello {!!session.user && session.user.email}!
      <SignOut />
    </main>
  );
};

const SignIn = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("resend", formData);
      }}
    >
      <input type="text" name="email" placeholder="Email" />
      <button type="submit">Signin with Resend</button>
    </form>
  );
};

const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit">Signout</button>
    </form>
  );
};

export default Home;
