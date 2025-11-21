"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function RedirectCallback() {
  const clerk = useClerk();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect_url");

  useEffect(() => {
    clerk.handleRedirectCallback({}, async (to) => {
      console.log("redirectUrl", redirectUrl);
      console.log("to", to);
      router.push(redirectUrl || to);
    });
  }, [clerk, router]);

  return <div></div>;
}
