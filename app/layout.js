import "tailwindcss/tailwind.css";
import NavLink from "./nav-link";

export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-900 antialiased text-gray-100">
      <head>
        <title>Nested layouts by example</title>
      </head>

      <body>
        <header className="border-b border-gray-700 p-4 space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/movies">Movies</NavLink>
        </header>

        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
