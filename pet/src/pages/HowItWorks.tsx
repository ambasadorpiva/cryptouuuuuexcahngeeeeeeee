import { useNavigate } from 'react-router-dom';
import { Coins, Rocket, Heart, Info, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [
    { number: 1, title: t('how.steps.1.title'), description: t('how.steps.1.description') },
    { number: 2, title: t('how.steps.2.title'), description: t('how.steps.2.description') },
    { number: 3, title: t('how.steps.3.title'), description: t('how.steps.3.description') },
    { number: 4, title: t('how.steps.4.title'), description: t('how.steps.4.description') },
  ];

  const features = [
    {
      icon: <Coins className="w-7 h-7 text-orange-400" />,
      title: t('how.features.bestRate.title'),
      description: t('how.features.bestRate.description'),
    },
    {
      icon: <Rocket className="w-7 h-7 text-orange-400" />,
      title: t('how.features.fast.title'),
      description: t('how.features.fast.description'),
    },
    {
      icon: <Heart className="w-7 h-7 text-orange-400" />,
      title: t('how.features.care.title'),
      description: t('how.features.care.description'),
    },
  ];

  return (
    <main className="min-h-screen text-white px-6 py-16 bg-[#0e0f11]">
      {/* Nav Tabs */}
      <div className="flex justify-center mb-14">
        <div className="bg-zinc-800 rounded-full px-2 py-1">
          <span className="px-6 py-2 bg-white text-black text-lg font-semibold rounded-full shadow-sm">
            {t('how.nav.convert')}
          </span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 mb-24">
        {/* Step-by-Step */}
        <section className="space-y-8">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex items-start gap-5">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                {number}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-zinc-400 text-sm mt-1">{description}</p>
              </div>
            </div>
          ))}

          <div className="mt-8 bg-[#161a23] rounded-xl p-5 border border-zinc-700">
            <div className="flex items-center text-orange-400 mb-2">
              <Info className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{t('how.note.title')}</span>
            </div>
            <p className="text-sm text-zinc-400">{t('how.note.text')}</p>

            <button
              onClick={() => navigate('/')}
              className="mt-6 flex items-center justify-center gap-2 bg-orange-400 text-black px-5 py-2 rounded-lg font-medium hover:bg-orange-500 transition"
            >
              {t('how.cta')}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Offer Section */}
        <aside className="rounded-3xl bg-[#161a23] p-8 shadow-md">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-orange-400">{t('how.offer.title')}</h2>
            <p className="text-lg text-zinc-300">{t('how.offer.subtitle')}</p>
          </div>
          <div className="bg-[#20252e] p-4 rounded-lg mt-6">
            <p className="text-sm text-zinc-400">{t('how.offer.description')}</p>
          </div>
        </aside>
      </div>

      {/* Feature Highlights */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <div key={i} className="bg-[#161a23] rounded-xl p-6 shadow-md border border-zinc-700 hover:border-orange-500 transition">
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-sm text-zinc-400">{f.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HowItWorks;
