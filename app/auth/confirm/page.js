"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import ConfirmEmail from "@/components/EmailConfirmation"

const ConfirmEmail = dynamic(() => import("./ConfirmEmail"), { ssr: false });

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ConfirmEmail />
    </Suspense>
  );
}
