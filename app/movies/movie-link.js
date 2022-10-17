"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MovieLink({ href, children }) {
  let selectedSegment = useSelectedLayoutSegment();
  let active = href === `/movies/${selectedSegment}`;

  return (
    <Link
      className={active ? "text-gray-100" : "hover:text-gray-300"}
      href={href}
    >
      {children}
    </Link>
  );
}
