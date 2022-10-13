import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  // console.log({ children });
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
