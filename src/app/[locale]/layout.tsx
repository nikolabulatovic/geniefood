import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import '../globals.css';
import { Montserrat, Poppins } from 'next/font/google';
import localFont from 'next/font/local';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const intro = localFont({
  src: '../../../public/fonts/Intro-Regular.ttf',
  variable: '--font-intro',
  display: 'swap',
});

export function generateStaticParams() {
  return [{ locale: 'sr' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locale) {
    notFound();
  }

  const messages = await import(`@/messages/${locale}.json`).catch(() => {
    notFound();
  });

  console.log('locale', locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages.default}>
      <div
        className={`${montserrat.variable} ${poppins.variable} ${intro.variable} font-sans`}>
        <Header />
        <main className='min-h-screen bg-white'>{children}</main>
      </div>
    </NextIntlClientProvider>
  );
}
