export default function FooLayout({ children }) {
  return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      <small>Foo layout</small>
      <div>{children}</div>
    </div>
  );
}
