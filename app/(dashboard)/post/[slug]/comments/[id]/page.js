export default function Page({ params }) {
  console.log({ rout: "commentId", params });
  return <p>Comment {params.id}</p>;
}
