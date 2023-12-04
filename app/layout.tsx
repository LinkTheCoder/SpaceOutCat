import './globals.css';
import { Inter } from 'next/font/google';
import Nav from '../components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Space Out Cat',
  description: 'A self-care app',
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Nav />
      </body>
    </html>
  );
}
