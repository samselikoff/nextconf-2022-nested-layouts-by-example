"use client";
import { useSelectedLayoutSegment } from "next/navigation";

import Link from "next/link";

export default function NavLink({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;

  return (
    <Link className={active ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}
