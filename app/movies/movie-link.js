"use client";
import { useSelectedLayoutSegment } from "next/navigation";

import Link from "next/link";

export default function MovieLink({ href, children }) {
  let id = useSelectedLayoutSegment();
  let active = href === `/movies/${id}`;

  return (
    <Link className={active ? "underline text-white" : ""} href={href}>
      {children}
    </Link>
  );
}
