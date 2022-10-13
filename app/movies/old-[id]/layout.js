// import { experimental_use as use } from "react";
import MovieDetailNav from "./MovieDetailNav";

// async function getMovie(id) {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return { id, year: 2020 };
// }

export default function Page({ children, params }) {
  // let movie = use(getMovie(params.id));
  let movie = { id: "foo", year: 1234 };

  return (
    <div className="w-full">
      <div className="p-4">
        <p className="text-xl">Movie {movie.id}</p>
        <p>Year: {movie.year}</p>
      </div>

      <MovieDetailNav movieId={params.id} />

      <div className="p-4">{children}</div>
    </div>
  );
}
