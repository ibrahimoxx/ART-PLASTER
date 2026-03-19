"use client";

import { ReactNode } from "react";

// Simplified page transition wrapper — just renders children directly.
// AnimatePresence with mode="wait" causes content to freeze at opacity:0
// in Next.js 14 App Router. Individual sections handle their own animations.
export default function PageTransition({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
