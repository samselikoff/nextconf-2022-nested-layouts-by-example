export default function Page({ params }) {
  console.log("rendering dynamic");
  return <p>Dynamic {params.id}</p>;
}
