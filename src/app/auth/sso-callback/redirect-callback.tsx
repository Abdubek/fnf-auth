"use client";

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RedirectCallback() {
  const clerk = useClerk();
  const router = useRouter();

  useEffect(() => {
    clerk.handleRedirectCallback({}, async (to) => router.push(to));
  }, [clerk, router]);

  return <div></div>;
}
