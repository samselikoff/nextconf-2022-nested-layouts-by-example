import Link from "next/link";
import { experimental_use as use } from "react";

async function getMovie(id) {
  let res = await fetch(`http://localhost:3001/movies/${id}`);

  return await res.json();
}

export default function Layout({ params, children }) {
  let id = params.id;
  let movie = use(getMovie(id));

  return (
    <div>
      <h1 className="text-3xl">{movie.title}</h1>
      <p className="mt-2">Year: {movie.year}</p>
      <p className="mt-2">{movie.overview}</p>

      <nav className="flex mt-4 border-b space-x-4">
        <Link href={`/movies/${id}`}>
          <a className="text-sm py-2">Cast</a>
        </Link>
        <Link href={`/movies/${id}/reviews`}>
          <a className="text-sm py-2">Reviews</a>
        </Link>
      </nav>

      {children}
    </div>
  );
}

export async function generateStaticParams() {
  let res = await fetch("http://localhost:3001/movies", {
    cache: "force-cache",
  });
  let movies = await res.json();

  return movies.map((movie) => ({
    id: movie.id,
  }));
}
