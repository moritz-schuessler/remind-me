import { auth } from "@/auth";
import { SignOut } from "@/components/auth/buttons";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <h1>Remind Me</h1>
      Hello {!!session!.user && session!.user.email}!
      <SignOut />
    </>
  );
};

export default Home;
