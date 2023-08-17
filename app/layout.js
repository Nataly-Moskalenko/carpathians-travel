import './globals.css';
import { Inter, Karantina } from '@next/font/google';

const inter = Inter({ variable: '--inter-font' });
const karantina = Karantina({ variable: '--logo-font' });

export const metadata = {
  title: 'Carpathians Travel',
  description:
    'We offer you unforgettable trips to the most beautiful parts of the Carpathians. Enjoy stunning views, exciting expeditions, and the best service!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${karantina.variable}`}>{children}</body>
    </html>
  );
}
