"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ movieId, children }) {
  let activeId = useSelectedLayoutSegment();
  let active = activeId === movieId;

  return (
    <Link
      href={`/movies/${movieId}`}
      className={active ? "underline" : "text-gray-500 hover:text-gray-900"}
    >
      {children}
    </Link>
  );
}
