import './globals.css';
import Navbar from '../components/Navbar/index';
import Footer from '../components/Footer/Footer';


export const metadata = {
  title: 'Black Mining',
  description: 'Black Mining Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-black'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
