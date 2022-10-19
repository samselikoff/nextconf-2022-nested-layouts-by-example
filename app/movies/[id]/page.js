import { experimental_use as use } from "react";

async function getMovie(id) {
  let res = await fetch(`http://localhost:3001/movies/${id}`);

  return res.json();
}

export default function Page({ params }) {
  let movie = use(getMovie(params.id));

  return (
    <div>
      <p className="text-3xl">{movie.title}</p>
      <p className="mt-2">Year: {movie.year}</p>
      <p className="mt-2">{movie.description}</p>
    </div>
  );
}

export async function generateStaticParams() {
  let res = await fetch("http://localhost:3001/movies");
  let movies = await res.json();

  return movies.map((movie) => ({ id: movie.id }));
}
