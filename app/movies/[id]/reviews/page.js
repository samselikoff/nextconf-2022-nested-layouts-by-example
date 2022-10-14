import { experimental_use as use } from "react";
// import CacheBuster from "./cache-buster";

async function getReviews(id) {
  let res = await fetch(`http://localhost:3001/movies/${id}/ratings`, {
    // cache: "no-store",
    // revalidate: 0,
  });

  return res.json();
}

export default function Page({ params }) {
  // console.log("Rendering Reviews page");
  let id = params.id;
  let reviews = use(getReviews(id));

  return (
    <div className="mt-4">
      <div className="mt-4">
        {/* <CacheBuster /> */}
        <p>Reviews:</p>

        <ul className="list-disc pl-4">
          {reviews.map((review) => (
            <li key={review.id}>
              {review.text} – {review.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// export const config = {
// dynamic: "force-dynamic",
// dynamicParams: true,
// fetchCache: 'auto',
// revalidate: 0,
// revalidate: false,
// runtime: 'nodejs'
// preferredRegion: 'auto',
// };
