import { experimental_use as use } from "react";

async function getCast(movieId) {
  let res = fetch(`http://localhost:3001/movies/${movieId}/cast`);

  return (await res).json();
}

export default function Page({ params }) {
  let castMembers = use(getCast(params.id));

  return (
    <ul className="list-disc pl-4 mt-4">
      {castMembers.map((member) => (
        <li key={member.id}>{member.name}</li>
      ))}
    </ul>
  );
}
