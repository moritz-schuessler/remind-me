import { auth, signIn } from "@/auth";

const Home = async () => {
  const session = await auth();

  if (!session) {
    return <SignIn />;
  }

  return (
    <main className="flex justify-center items-center h-screen bg-background text-foreground flex-col">
      <h1>Remind Me</h1>
      Hello {!!session.user && session.user.email}!
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

export default Home;
