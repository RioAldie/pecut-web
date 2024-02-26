import Footer from '@/components/footer';
import DrawerAppBar from '@/components/navbar';
import { CssBaseline } from '@mui/material';
import { Inter, Manrope } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Pecut Samandiman Kemasan',
  description: 'Website Informasi tentang Kampung Pecut Kemasan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={manrope.className}>
        <DrawerAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
