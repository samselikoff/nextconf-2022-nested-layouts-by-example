import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p className="text-lg">Welcome!</p>
      <p>
        <Link href="/movies/1">movies/1</Link>
        <Link href="/movies/2">movies/2</Link>
      </p>
    </div>
  );
}
