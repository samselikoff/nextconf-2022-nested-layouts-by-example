import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/loading-test/subtree-a/foo">Foo</Link>
        </li>
        <li>
          <Link href="/loading-test/subtree-a/bar">Bar</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
