"use client";

import { Button } from "@/src/components/ui/button";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const { signIn } = useSignIn();
  const { isLoaded } = useUser();
  const searchParams = useSearchParams();
  const redirectParam = searchParams.get("redirect_url");
  const redirectURL = redirectParam ? new URL(redirectParam) : null;
  const finalRedirect = redirectURL ? redirectURL.searchParams.get("redirect_uri") : null;

  const handleSignIn = async () => {
    signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/sso-callback",
      redirectUrlComplete: finalRedirect || "/",
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