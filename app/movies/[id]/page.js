import { experimental_use as use } from "react";

async function getCast(movieId) {
  let res = await fetch(`http://localhost:3001/movies/${movieId}/cast`);

  return res.json();
}

export default function Page({ params }) {
  let members = use(getCast(params.id));

  return (
    <div className="mt-4">
      <ul className="list-disc pl-4">
        {members.map((member) => (
          <li key={member.id}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
}
