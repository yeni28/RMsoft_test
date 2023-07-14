import './globals.css'
import Navbar from '../app/components/Navbar'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='my-[4rem]' >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
