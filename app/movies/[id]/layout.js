import Link from "next/link";
import { experimental_use as use } from "react";

async function getMovie(id) {
  console.log(`fetching movie ${id}: `, new Date().toISOString().slice(11, 22));
  let res = await fetch(`http://localhost:3001/movies/${id}`);

  return res.json();
}

export default function Page({ params, children }) {
  let movie = use(getMovie(params.id));

  return (
    <div>
      <p className="text-3xl">{movie.title}</p>
      <p className="mt-2">Year: {movie.year}</p>
      <p className="mt-2">{movie.description}</p>

      <nav className="flex mt-4 border-b space-x-4">
        <Link href={`/movies/${params.id}`} className="text-sm py-2">
          Cast
        </Link>
        <Link href={`/movies/${params.id}/reviews`} className="text-sm py-2">
          Reviews
        </Link>
      </nav>

      <div>{children}</div>
    </div>
  );
}
