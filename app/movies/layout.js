import Link from "next/link";
import { experimental_use as use } from "react";

async function getMovies() {
  let res = await fetch("http://localhost:3001/movies");

  return res.json();
}

export default function Layout({ children }) {
  let movies = use(getMovies());

  return (
    <div className="flex">
      <ul className="pr-10 text-sm flex-none">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>

      <div>{children}</div>
    </div>
  );
}
