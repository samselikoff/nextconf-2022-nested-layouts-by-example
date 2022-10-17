import "tailwindcss/tailwind.css";
import NavLink from "./nav-link";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-gray-900">
      <head>
        <title>Next.js</title>
      </head>

      <body className="flex flex-col min-h-screen">
        <header className="border-b border-gray-300">
          <div className="p-4 space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/movies">Movies</NavLink>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
