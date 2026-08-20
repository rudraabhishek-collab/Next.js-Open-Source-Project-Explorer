import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'IOI Open-Source Explorer',
  description: 'Discover and bookmark open-source projects',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
