import "tailwindcss/tailwind.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-gray-900">
      <head>
        <title>Next.js</title>
      </head>

      <body>{children}</body>
    </html>
  );
}
