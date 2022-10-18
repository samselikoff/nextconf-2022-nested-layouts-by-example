import { experimental_use as use } from "react";

async function getReviews(movieId) {
  let res = fetch(`http://localhost:3001/movies/${movieId}/reviews`);

  return (await res).json();
}

export default function Page({ params }) {
  let reviews = use(getReviews(params.id));

  return (
    <ul className="list-disc pl-4 mt-4">
      {reviews.map((review) => (
        <li key={review.id}>
          "{review.text}" – {review.author}
        </li>
      ))}
    </ul>
  );
}
