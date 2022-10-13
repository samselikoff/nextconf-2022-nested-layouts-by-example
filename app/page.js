"client";

import { useRouter } from "next/dist/client/components/hooks-client";
import Link from "next/link";
import { useTransition } from "react";

export default function Page() {
  let [isPending, startTransition] = useTransition();
  let router = useRouter();

  return (
    <div>
      <p className="text-lg">Welcome! pending: {isPending ? "yes" : "no"}</p>
      <p>{/* <Link href="/movies">Go to movies</Link> */}</p>
      <p>
        <Link soft={false} href="/page-foo">
          Go to Foo
        </Link>
      </p>
      <p>
        <a
          onClick={(e) => {
            e.preventDefault();

            startTransition(() => {
              router.push("/page-foo");
            });
          }}
          href="/page-foo"
        >
          Go to Foo
        </a>
      </p>
      <p>
        <Link href="/page-bar">Go to Bar</Link>
      </p>
    </div>
  );
}
