import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Nested layouts by example</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
