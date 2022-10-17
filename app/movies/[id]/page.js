import { experimental_use as use } from "react";

async function getMovie(id) {
  let res = await fetch(`http://localhost:3001/movies/${id}`);

  return res.json();
}

export default function Page({ params }) {
  let movie = use(getMovie(params.id));

  return <p className="text-2xl">{movie.title}</p>;
}
