"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function MovieDetailNav({ movieId }) {
  let selectedTab = useSelectedLayoutSegment();

  return (
    <div className="mt-12 border-b flex w-full space-x-8 mx-4">
      <Link href={`/movies/${movieId}`}>
        <a
          className={`${
            selectedTab === "" ? "border-rose-500" : "border-transparent"
          } -mb-px text-sm font-medium pb-4 border-b-2`}
        >
          Plot
        </a>
      </Link>
      <Link href={`/movies/${movieId}/cast`}>
        <a
          className={`${
            selectedTab === "cast" ? "border-rose-500" : "border-transparent"
          } border-b-2  -mb-px text-sm font-medium pb-4`}
        >
          Cast
        </a>
      </Link>
    </div>
  );
}
