import { useTranslation } from 'react-i18next';
const Privacy = () => {
    const { t } = useTranslation();

    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold">{t('Privacy.Title')}</h1>
      <p className="mt-4 text-gray-400">
          {t('Privacy.PrivacyPolicy')}
      </p>
    </div>
  );
};

export default Privacy;
