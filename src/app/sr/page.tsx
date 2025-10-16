import Home from '@/components/Home';
import { I18nProvider } from '@/contexts/I18nContext';
import messages from '@/messages/sr.json';

export default function SerbianPage() {
  return (
    <I18nProvider initialLocale='sr' messages={messages}>
      <Home />
    </I18nProvider>
  );
}
