"use client";

import { Button } from "@/src/components/ui/button";
import { useSignIn } from "@clerk/nextjs";

export default function AuthPage() {
  const { signIn } = useSignIn();

  const handleSignIn = async () => {
    await signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  if (!signIn) return null;

  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant="outline" onClick={handleSignIn}>
        Continue with Google
      </Button>
    </div>
  );
}
