
import "../../styles/index.css";
import Footer from "@/components/Footer2";
import { NavbarDemo } from "@/components/NavbarDemo";

export const metadata = {
  title: 'The Web Wave - Auth',
  description: 'Web Development Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NavbarDemo />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
