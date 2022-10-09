"client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/dist/client/components/hooks-client";

export default function Layout({ children }) {
  let id = useSelectedLayoutSegment();

  return (
    <>
      <nav className="p-4 border-r w-1/3">
        <p className="text-2xl">
          <Link href="/">Movies</Link>
        </p>
        <div className="mt-6">
          <Link href="/movies/1">
            <a
              className={`${
                id === "1" ? "underline" : ""
              } block hover:text-blue-500`}
            >
              Star Wars
            </a>
          </Link>
          <Link href="/movies/2">
            <a
              className={`${
                id === "2" ? "underline" : ""
              } block hover:text-blue-500`}
            >
              The Lord of the Rings
            </a>
          </Link>
        </div>
      </nav>

      <main className="w-2/3">{children}</main>
    </>
  );
}
