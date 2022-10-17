import { experimental_use as use } from "react";

async function getReviews(movieId) {
  let res = await fetch(`http://localhost:3001/movies/${movieId}/reviews`);

  return res.json();
}

export default function Page({ params }) {
  let reviews = use(getReviews(params.id));

  return (
    <div className="mt-4">
      <ul className="list-disc pl-4">
        {reviews.map((review) => (
          <li key={review.id}>
            &ldquo;{review.text}&rdquo; – {review.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
