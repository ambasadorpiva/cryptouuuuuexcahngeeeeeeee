import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const AppFooter = () => {
  const { t } = useTranslation();
  const [inputEmail, setInputEmail] = useState("");

  const submitEmail = () => {
    if (!inputEmail) {
      alert("Enter an email address");
      return;
    }

    console.log("Subscribed:", inputEmail);
    setInputEmail("");
  };

  const trendingPairs = ["BTC/USDT", "USDT/SOL", "BTC/XRP", "USDT/ETH"];

  const navItems = [
    { label: t("footer.quickLinksItems.aboutUs"), url: "/about" },
    { label: t("footer.quickLinksItems.howItWorks"), url: "/how-it-works" },
    { label: t("footer.quickLinksItems.contactSupport"), url: "/contact" },
  ];

  const policyItems = [
    { label: t("footer.legalItems.privacyPolicy"), url: "/privacy" },
    { label: t("footer.legalItems.termsOfService"), url: "/terms" },
    { label: t("footer.legalItems.amlPolicy"), url: "/cookies" },
  ];

  return (
    <footer className="bg-black text-neutral-300">
      {/* Subscribe */}
      <div className="border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-white text-2xl font-semibold mb-1">
                {t("footer.stayUpdated")}
              </h3>
              <p className="text-sm text-neutral-400">
                {t("footer.subscribe")}
              </p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <div className="relative">
                <input
                  type="email"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  placeholder={t("footer.enterEmail")}
                  className="w-full px-5 py-3 rounded-full bg-zinc-800 border border-zinc-700 pr-12 text-sm text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                />
                <button
                  onClick={submitEmail}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 p-2 rounded-full hover:bg-orange-700 transition"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            {t("footer.companyInfo.title")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 text-neutral-400">
              <Mail size={16} />
              <span>{t("footer.companyInfo.email")}</span>
            </li>
            <li className="flex items-center gap-2 text-neutral-400">
              <Phone size={16} />
              <span>{t("footer.companyInfo.phone")}</span>
            </li>
            <li className="flex items-center gap-2 text-neutral-400">
              <MapPin size={16} />
              <span>{t("footer.companyInfo.address")}</span>
            </li>
          </ul>
        </div>

        {/* Exchange Pairs */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            {t("footer.popularPairs")}
          </h4>
          <ul className="space-y-3 text-sm">
            {trendingPairs.map((pair, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {pair}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-3 text-sm">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.url}
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-white font-bold text-lg mb-4">
            {t("footer.legal")}
          </h4>
          <ul className="space-y-3 text-sm">
            {policyItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.url}
                  className="group flex items-center gap-2 text-neutral-400 hover:text-white transition"
                >
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-neutral-800 py-6 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <div>{t("footer.stayWithUs")}</div>
          <div>{t("footer.copyright")}</div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
