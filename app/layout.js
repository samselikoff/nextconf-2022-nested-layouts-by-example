import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
