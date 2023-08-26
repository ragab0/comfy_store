import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Bitter, Ubuntu } from "next/font/google";
import './globals.css';
import "@/components/tooltip/Tooltip.css";


export const metadata = {
  title: "Comphy Store - Online Eccomerce",
  description: "Comphy Store - The place where you can buy, show, hope and save beautiful products",
  icon: "/",
}


const bitter = Bitter({
  weight: ['300','400', '500', '600','700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bitter',

})
const ubuntu = Ubuntu({
  weight: ['300','400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bitter.variable}`}>
          <main className='min-h-screen'>
            <Navbar />
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
