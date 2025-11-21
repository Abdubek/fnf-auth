"use client";

import { Button } from "@/src/components/ui/button";
import { useSignIn, useUser } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthPage() {
  const { signIn, setActive } = useSignIn();
  const { isLoaded } = useUser();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url");
  const router = useRouter();

  console.log(redirectUrl);

  const handleSignIn = async () => {
    signIn?.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/auth/sso-callback",
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
