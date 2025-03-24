import "./globals.css";

export const metadata = {
  title: "Pie",
  description: "Our app will give you your live tax position",
  openGraph: {
    title: "Pie",
    description: "Our app will give you your live tax position",
    images: [
      {
        url: "/meta-img.png",
        width: 800,
        height: 600,
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
