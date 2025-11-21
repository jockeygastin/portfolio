import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});


// export const metadata = {
//   title: "Portfolio - Jockey gastin",
//   description: "Jockey gastin portfolio",
// };

export const metadata = {
  title: "Portfolio - Jockey Gastin",
  description: "Jockey gastin portfolio",
  openGraph: {
    title: "Portfolio - Jockey Gastin",
    description: "Jockey gastin portfolio",
    url: "https://portfolio-iota-wine-60.vercel.app/",
    siteName: "Jockey Portfolio",
    images: [
      {
        url: "https://portfolio-iota-wine-60.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Jockey Gastin",
    description: "Jockey gastin portfolio",
    images: ["https://portfolio-iota-wine-60.vercel.app/og-image.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8
         overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
