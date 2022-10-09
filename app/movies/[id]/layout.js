import { experimental_use as use } from "react";
import MovieDetailNav from "./MovieDetailNav";

async function getMovie(id) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { id };
}

export default function Page({ children, params }) {
  let movie = use(getMovie(params.id));

  return (
    <div className="w-full">
      <p className="p-4 text-xl">Movie {movie.id}</p>

      <MovieDetailNav movieId={params.id} />

      <div className="p-4">{children}</div>
    </div>
  );
}
