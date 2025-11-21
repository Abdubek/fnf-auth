import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";
import { RedirectCallback } from "./redirect-callback";
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

export default function SSORedirectPage() {
  return (
    <div>
      <div className="container grid justify-center items-center h-full">
        <h1 className="text-h6 flex items-center gap-2 font-grotesk">
          <LoaderIcon className="animate-spin" />
          Wait just a moment...
        </h1>
      </div>

      <AuthenticateWithRedirectCallback />
      {/* <Suspense fallback={null}>
        <RedirectCallback />
      </Suspense> */}
    </div>
  );
}
