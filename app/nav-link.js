"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, children }) {
  let id = useSelectedLayoutSegment();
  let isActive = href === `/${id}`;

  return (
    <Link href={href}>
      <a className={isActive ? "underline" : ""}>{children}</a>
    </Link>
  );
}
