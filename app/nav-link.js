"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, children }) {
  let id = useSelectedLayoutSegment();
  let isActive = href === `/${id}`;

  return (
    <Link href={href} className={isActive ? "underline" : ""}>
      {children}
    </Link>
  );
}
