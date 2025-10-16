import Home from '@/components/Home';
import { I18nProvider } from '@/contexts/I18nContext';
import messages from '@/messages/en.json';

export default function EnglishPage() {
  return (
    <I18nProvider initialLocale='en' messages={messages}>
      <Home />
    </I18nProvider>
  );
}
