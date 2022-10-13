import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  console.log("Rendering root layout");

  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body className="p-8">
        <div className="space-y-4">
          <nav className="space-x-6 border p-2">
            <Link href="/">Home</Link>
            <Link href="/1-about">About</Link>
          </nav>

          <nav className="space-x-6 border p-2">
            <Link href="/2-nested">Nested root</Link>
            <Link href="/2-nested/nest">Nested page</Link>
          </nav>

          <nav className="space-x-6 border p-2">
            <Link href="/3-dynamic/1">/dynamic/1</Link>
            <Link href="/3-dynamic/2">/dynamic/2</Link>
          </nav>

          <nav className="space-x-6 border p-2">
            <Link href="/3-dynamic/1/home">/dynamic/1/home</Link>
            <Link href="/3-dynamic/1/about">/dynamic/1/about</Link>
            <Link href="/3-dynamic/2/home">/dynamic/2/home</Link>
            <Link href="/3-dynamic/2/about">/dynamic/2/about</Link>
          </nav>
        </div>

        <main className="mt-8">{children}</main>
      </body>
    </html>
  );
}
