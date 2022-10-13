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
            <Link href="/dynamic/1">/dynamic/1</Link>
            <Link href="/dynamic/2">/dynamic/2</Link>
          </nav>
        </div>

        <main className="mt-8">{children}</main>
      </body>
    </html>
  );
}
