import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p className="text-lg">Welcome!</p>
      <p>
        <Link href="/movies">Go to movies</Link>
      </p>
    </div>
  );
}
