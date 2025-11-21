"use client";

import { Button } from "@/src/components/ui/button";
import { useSignIn } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const { signIn } = useSignIn();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url");

  const handleSignIn = async () => {
    await signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/sso-callback?redirect_url=" + encodeURIComponent(redirectUrl || "/"),
      redirectUrlComplete: redirectUrl || "/",
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
