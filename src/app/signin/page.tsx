import { signIn } from "@/auth";

const SignInPage = () => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="font-semibold">Sign in to Remind-Me</h1>
      <form
        className="flex flex-col gap-4"
        action={async (formData) => {
          "use server";
          await signIn("resend", formData, { redirect: "/signin-process" });
        }}
      >
        <input type="text" name="email" placeholder="Email" required />
        <button type="submit">Signin with Resend</button>
      </form>
    </div>
  );
};

export default SignInPage;
