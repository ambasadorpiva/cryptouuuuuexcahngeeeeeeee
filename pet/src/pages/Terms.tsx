import { useTranslation } from 'react-i18next';
const Terms = () => {
    const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold">{t('TermsService.Tile')}</h1>
      <p className="mt-4 text-gray-400">
          {t('TermsService.TermsService')}
      </p>
    </div>
  );
};

export default Terms;
