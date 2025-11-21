"use client";

import { Button } from "@/src/components/ui/button";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const { signIn } = useSignIn();
  const { isLoaded } = useUser();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url");

  console.log(redirectUrl);

  const handleSignIn = async () => {
    await signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: redirectUrl || "/",
      redirectUrlComplete: redirectUrl || "/",
    });
  };

  if (!signIn || !isLoaded) return null;

  return (
    <div className="flex justify-center items-center h-screen">
      <Button variant="outline" onClick={handleSignIn}>
        Continue with Google
      </Button>
    </div>
  );
}
