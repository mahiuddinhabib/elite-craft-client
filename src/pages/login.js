import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { data: session } = useSession();
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            {session ? (
              <>
                <button className="btn" onClick={() => signOut()}>
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn"
                  onClick={() =>
                    signIn("google", {
                      callbackUrl: "https://elite-craft-client.vercel.app/",
                    })
                  }
                >
                  Sign in with Google
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
};

export default Login;
