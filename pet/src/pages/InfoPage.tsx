import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaShieldAlt, FaStopwatch, FaCoins, FaArrowRight } from 'react-icons/fa';
import Reviews from '../components/UserVoices';

const InfoPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    const featureItems = [
        {
            icon: <FaShieldAlt size={32} color="#f7931a" />,
            title: t('about.features.secureTitle'),
            desc: t('about.features.secureDesc'),
        },
        {
            icon: <FaStopwatch size={32} color="#f7931a" />,
            title: t('about.features.fastTitle'),
            desc: t('about.features.fastDesc'),
        },
        {
            icon: <FaCoins size={32} color="#f7931a" />,
            title: t('about.features.multipleTitle'),
            desc: t('about.features.multipleDesc'),
        },
    ];

    const supportedTokens = ['Bitcoin', 'Ethereum', 'USDT', 'TON', 'TRC20', 'Solana'];

    return (
        <div className="bg-[#111215] text-white min-h-screen">
            {/* Intro */}
            <div className="text-center py-24 px-6 max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">{t('about.hero.title')}</h1>
                <p className="text-lg md:text-2xl text-gray-400 leading-relaxed">
                    {t('about.hero.description')}
                </p>
            </div>

            {/* Features */}
            <div className="bg-[#1a1d23] py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                    {featureItems.map((item, idx) => (
                        <div key={idx} className="p-6 rounded-xl bg-[#20242c] hover:shadow-lg transition-shadow">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Supported Currencies */}
            <div className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.payment.title')}</h2>
                <p className="text-lg text-gray-300 mb-10">{t('about.payment.description')}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {supportedTokens.map((token) => (
                        <div
                            key={token}
                            className="bg-[#22272f] p-4 rounded-lg text-center text-sm font-medium"
                        >
                            {token}
                        </div>
                    ))}
                </div>
            </div>

            {/* User Feedback */}
            <div className="bg-[#161b22] py-16">
                <Reviews />
            </div>

            {/* Call to Action */}
            <div className="py-20 text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('about.cta.title')}</h2>
                <p className="text-lg text-gray-400 mb-8">{t('about.cta.description')}</p>
                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center bg-[#f7931a] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#ff9e25] transition-colors"
                >
                    {t('about.cta.button')}
                    <FaArrowRight className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default InfoPage;
