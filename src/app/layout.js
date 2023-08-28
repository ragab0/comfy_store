import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';


export const metadata = {
  title: "Comphy Store - Eccomerce",
  description: "Ragab Eid - The place where you can buy the best room offers",
  icon: "/favicon.ico",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='min-h-screen'>
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
