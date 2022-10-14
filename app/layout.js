import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-gray-900">
      <head>
        <title>Next.js</title>
      </head>

      <body className="p-8">
        <nav className="text-sm border space-x-4">
          <Link href="/images/1">Image 1</Link>
          <Link href="/images/2">Image 2</Link>
        </nav>

        <div className="mt-4">{children}</div>
      </body>
    </html>
  );
}
