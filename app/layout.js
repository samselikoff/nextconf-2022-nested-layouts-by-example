import "tailwindcss/tailwind.css";
import NavLink from "./nav-link";

export default function RootLayout({ children }) {
  return (
    <html className="antialiased bg-zinc-900 text-zinc-200">
      <head>
        <title>Nested layouts by example</title>
      </head>

      <body>
        <header className="border-b border-gray-700 p-4 space-x-4">
          <NavLink className="underline" href="/">
            Home
          </NavLink>
          <NavLink href="/movies">Movies</NavLink>
        </header>

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
