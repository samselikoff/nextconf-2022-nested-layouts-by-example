import "tailwindcss/tailwind.css";
import { experimental_use as use } from "react";
import MovieLink from "./movie-link";

async function getMovies() {
  let res = await fetch("http://localhost:3001/movies");

  return res.json();
}

export default function RootLayout({ children }) {
  let movies = use(getMovies());

  return (
    <div className="flex h-full">
      <nav className="border-r w-1/3">
        <div className="p-4">
          {movies.map((movie) => (
            <div key={movie.id}>
              <MovieLink movieId={movie.id}>{movie.title}</MovieLink>
            </div>
          ))}
        </div>
      </nav>

      <main className="w-2/3 p-4">{children}</main>
    </div>
  );
}
