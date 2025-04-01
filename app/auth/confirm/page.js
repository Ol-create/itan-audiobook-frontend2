"use client";

import { Suspense } from "react";
import ConfirmEmail from "@/components/EmailConfirmation"

export default function ConfirmEmailPage() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <ConfirmEmail />
    </Suspense>
  );
}
