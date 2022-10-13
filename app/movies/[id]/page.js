import { experimental_use as use } from "react";

async function getMovie(id) {
  let res = await fetch(`http://localhost:3001/movies/${id}`);

  return await res.json();
}

export default function Page({ params }) {
  let id = params.id;
  let movie = use(getMovie(id));

  return <p className="mt-4">{movie.overview}</p>;
}
