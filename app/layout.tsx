import type { Metadata } from 'next';
import Link from 'next/link';
import { Press_Start_2P, VT323 } from 'next/font/google';
import './globals.css';

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
});

export const metadata: Metadata = {
  title: '東京行程規劃 2026 ✈️',
  description: '5天4夜東京旅遊行程 - 像素風復古版',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${pressStart2P.variable} ${vt323.variable}`}>
      <body className="bg-background text-foreground font-vt323 min-h-screen flex flex-col antialiased">
        <nav className="sticky top-0 z-50 bg-background border-b-4 border-primary p-4 shadow-[0_4px_0_0_#18181B] flex flex-wrap gap-4 items-center justify-between">
          <Link
            href="/"
            className="font-press-start text-sm sm:text-base text-accent-pink hover:text-primary transition-colors duration-200"
            style={{ textShadow: '2px 2px 0px #18181B' }}
          >
            🕹️ TOKYO 2026
          </Link>
          <div className="flex flex-wrap gap-4 items-center text-xs sm:text-sm uppercase font-press-start tracking-wider">
            {['day1', 'day2', 'day3', 'day4', 'day5'].map((day) => (
              <Link
                key={day}
                href={`/itinerary/${day}`}
                className="hover:text-accent-pink hover:-translate-y-1 transition-transform duration-200"
              >
                {day.toUpperCase()}
              </Link>
            ))}
            <span className="text-secondary hidden sm:inline">|</span>
            <div className="flex gap-4 font-vt323 text-base">
              <Link href="/preparation/checklist" className="hover:text-accent-pink hover:-translate-y-1 transition-transform duration-200">裝備清單</Link>
              <Link href="/preparation/accommodation" className="hover:text-accent-pink hover:-translate-y-1 transition-transform duration-200">旅館據點</Link>
              <Link href="/preparation/flight" className="hover:text-accent-pink hover:-translate-y-1 transition-transform duration-200">飛行船</Link>
            </div>
          </div>
        </nav>

        <main className="flex-grow p-4 sm:p-8 max-w-5xl mx-auto w-full">
          {children}
        </main>

        <footer className="mt-auto border-t-4 border-primary p-6 bg-primary text-background text-center">
          <p className="font-vt323 text-base sm:text-lg mb-2">© 2026 東京行程規劃</p>
          <p className="text-sm font-vt323">製作人: BERRY 🌸</p>
        </footer>
      </body>
    </html>
  );
}
