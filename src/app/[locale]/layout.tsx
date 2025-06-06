import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { blugie } from '../fonts';
import '../globals.css';

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
    <html lang={locale}>
      <body className={blugie.variable}>
        <NextIntlClientProvider locale={locale} messages={messages.default}>
          <main className='min-h-screen bg-white'>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
