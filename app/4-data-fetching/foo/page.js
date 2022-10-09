import { experimental_use as use } from "react";

export async function getCount() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return 5;
}

export default function Page() {
  console.log("before count");
  const count = use(getCount());

  console.log("after count");

  return count;
}
