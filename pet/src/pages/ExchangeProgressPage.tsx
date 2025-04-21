import { useEffect, useState } from "react";
import { Copy, ArrowLeftRight } from "lucide-react";
import { Stepper, Step, StepLabel, styled } from "@mui/material";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import { useLocation } from "react-router-dom";
import { Crypto } from "../components/convertor/Convertor";
import { fetchTopCryptos } from "../api/crypto";
import { useTranslation } from "react-i18next";

const CustomConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "linear-gradient(95deg, #FF6B00 0%, #FF8533 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "linear-gradient(95deg, #FF6B00 0%, #FF8533 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#2A2A2A",
    borderRadius: 1,
  },
}));

const CustomStepIconContainer = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: "#2A2A2A",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: "linear-gradient(136deg, #FF6B00 0%, #FF8533 100%)",
    boxShadow: "0 4px 10px 0 rgba(255, 107, 0, 0.25)",
  }),
  ...(ownerState.completed && {
    background: "linear-gradient(136deg, #FF6B00 0%, #FF8533 100%)",
  }),
}));

function CustomStepIcon({ active, completed, icon }) {
  return (
    <CustomStepIconContainer ownerState={{ completed, active }}>
      {icon}
    </CustomStepIconContainer>
  );
}

function ExchangeProgressPage() {
  const [assets, setAssets] = useState<Crypto[]>([]);
  const [transactionId] = useState("0144844461f947");
  const [stepIndex] = useState(0);

  const location = useLocation();
  const {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    receivingAddress,
    merchantAddress,
  } = location.state || {};

  const { t } = useTranslation();

  useEffect(() => {
    fetchTopCryptos()
      .then((res) => {
        const popular = res.data.filter((crypto: Crypto) =>
          ["BTC", "SOL", "ETH", "USDT", "XRP", "BNB", "USDC", "DOGE", "ADA", "TRX", "TON", "LINK", "XLM", "AVAX", "SHIB", "SUI", "LTC", "UNI", "APT", "NEAR", "PEPE", "Ondo", "ARB", "OP"].includes(crypto.symbol)
        );
        setAssets(popular);
      })
      .catch((err) => console.error("Crypto fetch error:", err));
  }, []);

  const exchangeSteps = [
    t("thankYou.steps.awaitingDeposit"),
    t("thankYou.steps.awaitingConfirmations"),
    t("thankYou.steps.exchanging"),
    t("thankYou.steps.sendingToYou"),
    t("thankYou.steps.done"),
  ];

  const copyText = (text: string) => navigator.clipboard.writeText(text);

  const resolveIconPath = (symbol: string) => {
    const currency = assets.find((item) => item.symbol === symbol);
    if (!currency) return "";
    const base = `src/publick/images/cryptos/${currency.slug?.toLowerCase()}-${symbol?.toLowerCase()}-logo.png`;
    return base;
  };

  return (
    <div className="flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full space-y-6">
        <div className="bg-[rgb(22,26,35)] rounded-xl p-4 flex justify-between items-center">
          <span className="text-gray-500">{t("thankYou.orderId")}</span>
          <div className="flex items-center gap-2">
            <span className="text-white">{transactionId}</span>
            <button onClick={() => copyText(transactionId)} className="text-orange-500 hover:text-orange-400">
              <Copy size={16} />
            </button>
          </div>
        </div>

        <div className="relative grid md:grid-cols-2 gap-4">
          {[{ label: t("thankYou.youNeedToSend"), value: fromAmount, symbol: fromCurrency }, { label: t("thankYou.youWillReceive"), value: toAmount, symbol: toCurrency }].map((item, idx) => (
            <div key={idx} className="bg-[rgb(22,26,35)] rounded-xl p-6">
              <h3 className="text-white mb-3">{item.label}</h3>
              <div className="flex items-center gap-2">
                <img src={resolveIconPath(item.symbol)} alt={item.symbol} className="w-6 h-6" />
                <span className="text-white text-xl font-semibold">{item.value} {item.symbol}</span>
              </div>
            </div>
          ))}

          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2A2A] p-3 rounded-full shadow-lg">
            <ArrowLeftRight className="text-[#808080] w-6 h-6" />
          </div>
        </div>

        <div className="bg-[rgb(22,26,35)] rounded-xl p-6 space-y-6">
          {[{ label: t("thankYou.amount"), value: fromAmount, symbol: fromCurrency }, { label: t("thankYou.toThisAddress"), value: merchantAddress }, { label: t("thankYou.yourWalletAddress"), value: receivingAddress }].map((item, idx) => (
            <div key={idx}>
              <div className="text-gray-500 mb-1">{item.label}</div>
              <div className="flex items-center gap-2">
                {item.symbol && <img src={resolveIconPath(item.symbol)} alt={item.symbol} className="w-6 h-6" />}
                <span className="text-white font-mono break-all">{item.value}</span>
                <button onClick={() => copyText(item.value)} className="text-orange-500 hover:text-orange-400 flex-shrink-0">
                  <Copy size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[rgb(22,26,35)] rounded-xl p-6">
          <Stepper activeStep={stepIndex} alternativeLabel connector={<CustomConnector />}>
            {exchangeSteps.map((step, idx) => (
              <Step key={step}>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  <div className="text-xs text-gray-500 mb-1">STEP {idx + 1}</div>
                  <div className="text-white text-sm">{step}</div>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </div>
  );
}

export default ExchangeProgressPage;
