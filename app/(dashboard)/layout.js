import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/foo">Foo</Link>
          <Link href="/foo/bar">Bar</Link>
          <Link href="/login">Login</Link>
        </nav>
        <div>
          <Link href="/4-data-fetching/foo">
            Go to a page with data fetching
          </Link>
        </div>
      </header>
      <main style={{ border: "1px solid black", padding: 10 }}>
        <small>main layout</small>
        <div>{children}</div>
      </main>
    </div>
  );
}
