"use client";

import { Button } from "@/src/components/ui/button";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
  const { signIn } = useSignIn();
  const { isSignedIn, isLoaded } = useUser();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirectUrl = searchParams.get("redirect_url");

  useEffect(() => {
    if (isLoaded && isSignedIn && redirectUrl) {
      router.push(redirectUrl);
    }
  }, [isLoaded, isSignedIn, redirectUrl, router]);

  const handleSignIn = async () => {
    await signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/sso-callback?redirect_url=" + encodeURIComponent(redirectUrl || "/"),
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
