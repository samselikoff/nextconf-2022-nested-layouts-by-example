import Link from "next/link";
import { experimental_use as use } from "react";

async function getMovie() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { some: "data" };
}

export default function Page() {
  let { some } = use(getMovie());
  console.log("rendering Foo");

  return (
    <div>
      <p>
        <Link href="/">&lt; Back home</Link>
      </p>
      <p>Page Foo: {some}</p>
    </div>
  );
}
