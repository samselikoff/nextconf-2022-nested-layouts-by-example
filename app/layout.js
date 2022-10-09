import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>

      <body className="">{children}</body>
    </html>
  );
}
