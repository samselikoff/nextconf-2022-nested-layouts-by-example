"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CacheBuster() {
  let router = useRouter();

  useEffect(() => {
    console.log("running");
    // router.reload();
  }, [router]);

  return null;
}
