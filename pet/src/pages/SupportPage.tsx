import { useTranslation } from 'react-i18next';
import { FiMail, FiSend } from 'react-icons/fi';

const SupportPage = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-[#0e0f11] text-gray-100 min-h-screen pt-28 px-6">
      {/* Intro */}
      <header className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
          {t('contact.heroTitle')}
        </h1>
      </header>

      {/* Info + Form */}
      <section className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto mb-24">
        <div className="space-y-6">
          {[
            t('contact.bullet1'),
            t('contact.bullet2'),
            t('contact.bullet3')
          ].map((text, idx) => (
            <div key={idx} className="flex items-start space-x-3">
              <div className="mt-2 w-2 h-2 bg-orange-400 rounded-full"></div>
              <p className="text-gray-300 text-base">{text}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#181b22] p-8 rounded-2xl shadow-md border border-[#2c2f36]">
          <form className="space-y-5">
            <div>
              <label htmlFor="fullName" className="text-sm text-gray-400 mb-1 block">
                {t('contact.form.name')}
              </label>
              <input
                id="fullName"
                type="text"
                placeholder={t('contact.form.namePlaceholder')}
                className="w-full p-3 rounded-lg bg-[#111215] text-white border border-gray-700 focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-gray-400 mb-1 block">
                {t('contact.form.email')}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t('contact.form.emailPlaceholder')}
                className="w-full p-3 rounded-lg bg-[#111215] text-white border border-gray-700 focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="msg" className="text-sm text-gray-400 mb-1 block">
                {t('contact.form.message')}
              </label>
              <textarea
                id="msg"
                rows={5}
                placeholder={t('contact.form.messagePlaceholder')}
                className="w-full p-3 rounded-lg bg-[#111215] text-white border border-gray-700 focus:outline-none focus:ring focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-semibold py-3 rounded-lg flex justify-center items-center gap-2 hover:from-orange-600 hover:to-pink-500 transition-colors"
            >
              <FiSend className="w-5 h-5" />
              {t('contact.form.send')}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-3">{t('contact.helpTitle')}</h2>
          <p className="text-gray-400 mb-10">{t('contact.helpDescription')}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="mailto:support@cryptoExchange.io"
              className="block p-6 rounded-xl bg-[#181b22] border border-gray-700 hover:border-orange-500 transition"
            >
              <FiMail className="text-orange-500 w-7 h-7 mb-3" />
              <h3 className="text-xl font-semibold mb-1">{t('contact.emailSupportTitle')}</h3>
              <p className="text-gray-400">{t('contact.emailSupportText')}</p>
            </a>

            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-[#181b22] border border-gray-700 hover:border-orange-500 transition"
            >
              <FiSend className="text-orange-500 w-7 h-7 mb-3" />
              <h3 className="text-xl font-semibold mb-1">{t('contact.scheduleCallTitle')}</h3>
              <p className="text-gray-400">{t('contact.scheduleCallText')}</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SupportPage;
