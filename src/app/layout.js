import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import Toasts from "@/components/Toasts";

export const metadata = {
  title: "Comphy Store - Eccomerce",
  description:
    "Comphy Store - The place where you can buy the best room offers",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toasts />
        <div className="min-h-screen">
          {/* <p className=' bg-clrGrey text-black p-2 text-center text-base'>Support Ukraine 🇺🇦 - Comming soon <span className='text-red-400'> (Not completed yet!)</span></p> */}
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
