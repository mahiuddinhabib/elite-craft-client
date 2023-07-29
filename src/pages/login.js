import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000/",
          })
        }
      >
        Sign in
      </button>
    </>
  );
};

export default Login;
