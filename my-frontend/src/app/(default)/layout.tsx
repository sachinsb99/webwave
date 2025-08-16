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

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { NavbarDemo } from "@/components/NavbarDemo";
// import { NavbarDemo } from "@/components/navbar";
import "../../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      
      <head /> 
        {/* will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          {/* <Header /> */}
          <NavbarDemo />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
