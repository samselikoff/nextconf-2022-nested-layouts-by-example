"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ href, children }) {
  let selectedSegment = useSelectedLayoutSegment();
  let active = href === `/${selectedSegment}`;

  return (
    <Link className={active ? "underline" : ""} href={href}>
      {children}
    </Link>
  );
}
