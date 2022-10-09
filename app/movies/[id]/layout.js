import Link from "next/link";
import { experimental_use as use } from "react";

async function getMovie(id) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { id };
}

export default function Page({ children, params }) {
  let movie = use(getMovie(params.id));
  console.log(params);

  return (
    <div className="w-full">
      <p className="p-4 text-xl">Movie {movie.id}</p>

      <div className="mt-12 border-b flex w-full space-x-8 mx-4">
        <Link href={`/movies/${params.id}`}>
          <a className="-mb-px text-sm font-medium pb-4 border-b-2 border-rose-500">
            Overview
          </a>
        </Link>
        <Link href={`/movies/${params.id}/cast`}>
          <a className="-mb-px text-sm font-medium pb-4">Cast</a>
        </Link>
      </div>

      <div className="p-4">{children}</div>
    </div>
  );
}
