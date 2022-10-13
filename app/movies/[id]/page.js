import { experimental_use as use } from "react";

async function getMovie(id) {
  let res = await fetch(`http://localhost:3001/movies/${id}`);

  return await res.json();
}
export default function Page({ params }) {
  let movie = use(getMovie(params.id));
  console.log(movie);

  return (
    <div>
      <h1 className="text-3xl">Movie {params.id}</h1>
      <p>Year: {movie.year}</p>
      <p className="mt-4">
        Overview. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
        commodi harum omnis accusamus saepe aperiam perspiciatis suscipit
        cupiditate non, ipsum, maxime nemo minus obcaecati neque et. Voluptatum
        quaerat molestiae sed?
      </p>
    </div>
  );
}
