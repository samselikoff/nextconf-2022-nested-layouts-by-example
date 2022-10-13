import { experimental_use as use } from "react";

async function getCast(movieId) {
  let res = await fetch(`http://localhost:3001/movies/${movieId}/cast`);

  return await res.json();
}

export default function Page({ params }) {
  let cast = use(getCast(params.id));

  return (
    <div>
      <ul className="mt-4 list-disc pl-4">
        {cast.map((castMember) => (
          <li key={castMember.id}>{castMember.name}</li>
        ))}
      </ul>
    </div>
  );
}
