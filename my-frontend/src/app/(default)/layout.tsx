// app/layout.tsx (Root Layout - Modified)
// "use client";

// import { Inter } from "next/font/google";
// import "../styles/index.css";
// import { Providers } from "./providers";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html suppressHydrationWarning lang="en">
//       <head />
//       <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }

"use client";
import Footer from "@/components/Footer2";
import { NavbarDemo } from "@/components/NavbarDemo";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import "../../styles/index.css";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <NavbarDemo />
      {children}
      <Footer />
      <ScrollToTop />
    </Providers>
  );
}