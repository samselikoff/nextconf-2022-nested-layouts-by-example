export default function Layout({ children, params }) {
  console.log({ route: "post layout", params });
  return (
    <div style={{ border: "1px solid red", padding: 10 }}>
      <div>This is the Post layout</div>
      <p>Here's Post {params.slug}</p>
      <div>
        <p>Heres your selected comment:</p>
        <div>{children}</div>
      </div>
    </div>
  );
}
