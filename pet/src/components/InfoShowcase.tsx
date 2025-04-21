import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

const InfoShowcase = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const FeatureBox = ({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-orange-600/10 rounded-xl">{icon}</div>
      <div>
        <h5 className="font-semibold text-lg mb-1">{title}</h5>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-black py-20 text-white">
      <div className="max-w-7xl mx-auto px-5 grid gap-16 lg:grid-cols-2">
        {/* Left Column */}
        <div className="bg-zinc-900 p-8 rounded-3xl shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("contactUs.title")}
            </h2>
            <p className="text-gray-400 text-base mb-6">
              {t("contactUs.description")}
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="self-start mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-sm font-medium transition-all"
          >
            {t("contactUs.buttonText")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {t("howItWorks.title")}
            </h2>
            <p className="text-gray-400 text-base mb-6">
              {t("howItWorks.description")}
            </p>
          </div>

          <div className="space-y-6">
            <FeatureBox
              icon={<MessageSquare className="text-orange-500 w-6 h-6" />}
              title={t("howItWorks.steps.consultation.title")}
              description={t("howItWorks.steps.consultation.description")}
            />
            <FeatureBox
              icon={<Mail className="text-orange-500 w-6 h-6" />}
              title={t("howItWorks.steps.solution.title")}
              description={t("howItWorks.steps.solution.description")}
            />
          </div>

          <button
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition"
          >
            {t("howItWorks.seeMore")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InfoShowcase;
