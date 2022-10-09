import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body className="flex min-h-screen">
        <nav className="p-4 border-r w-1/3">
          <p className="text-2xl">
            <Link href="/">Movies</Link>
          </p>
          <div className="mt-6">
            <Link href="/movies/1">
              <a className="block hover:text-blue-500">Star Wars</a>
            </Link>
            <Link href="/movies/2">
              <a className="block hover:text-blue-500">The Lord of the Rings</a>
            </Link>
          </div>
        </nav>

        <main className="w-2/3">{children}</main>
      </body>
    </html>
  );
}
