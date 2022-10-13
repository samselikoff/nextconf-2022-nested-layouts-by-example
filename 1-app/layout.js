import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body>
        <p>
          <Link href="/">Build UI</Link>
        </p>
        {children}
      </body>
    </html>
  );
}
