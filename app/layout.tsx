import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the compone    "theme_color": ",nts returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="manifest" href="manifest.json" />
        <meta name="theme-color" content="#50e3c2"/>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
