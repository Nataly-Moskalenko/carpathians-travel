import './globals.css';
import { Inter, Karantina } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
// const karantina = Karantina({ subsets: ['latin'] });

export const metadata = {
  title: 'Carpathians Travel',
  description:
    'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
