import "tailwindcss/tailwind.css";
import { experimental_use as use } from "react";
import Link from "next/link";
import MovieLink from "./movie-link";

async function getMovies() {
  let res = await fetch("http://localhost:3001/movies");

  return res.json();
}

export default function RootLayout({ children }) {
  let movies = use(getMovies());

  return (
    <html lang="en" className="text-gray-900">
      <head>
        <title>Next.js</title>
      </head>

      <body>
        <div className="flex">
          <nav className="p-4 border-r w-1/3">
            <p className="text-2xl">
              <Link href="/movies">Movies</Link>
            </p>
            <div className="mt-6">
              {movies.map((movie) => (
                <div key={movie.id}>
                  <MovieLink movieId={movie.id}>{movie.title}</MovieLink>
                </div>
              ))}
            </div>
          </nav>

          <main className="w-2/3 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
