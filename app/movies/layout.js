import { experimental_use as use } from "react";
import MovieLink from "./movie-link";

async function getMovies() {
  let res = await fetch("http://localhost:3001/movies");

  return res.json();
}

export default function Layout({ children }) {
  let movies = use(getMovies());

  return (
    <div className="flex">
      <ul className="pr-10 text-sm text-gray-400 space-y-1">
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieLink href={`/movies/${movie.id}`}>{movie.title}</MovieLink>
          </li>
        ))}
      </ul>

      <div>{children}</div>
    </div>
  );
}
