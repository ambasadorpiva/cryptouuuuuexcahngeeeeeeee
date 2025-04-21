import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const tokenPairs = [
  {
    from: "BTC",
    to: "USDC",
    fromName: "Bitcoin",
    toName: "USD Coin",
    fromImage: "src/publick/images/cryptos/bitcoin-btc-logo.png",
    toImage: "src/publick/images/cryptos/usd-coin-usdc-logo.png",
  },
  {
    from: "ETH",
    to: "TRX",
    fromName: "Ethereum",
    toName: "TRON",
    fromImage: "src/publick/images/cryptos/ethereum-eth-logo.png",
    toImage: "src/publick/images/cryptos/tron-trx-logo.png",
  },
  {
    from: "USDT",
    to: "ADA",
    fromName: "Tether (ERC20)",
    toName: "Cardano",
    fromImage: "src/publick/images/cryptos/tether-usdt-logo.png",
    toImage: "src/publick/images/cryptos/cardano-ada-logo.png",
  },
  {
    from: "XRP",
    to: "ZIL",
    fromName: "Ripple",
    toName: "ZIL",
    fromImage: "src/publick/images/cryptos/xrp-xrp-logo.png",
    toImage: "src/publick/images/cryptos/zilliqa-zil-logo.png",
  },
  {
    from: "LTC",
    to: "DOT",
    fromName: "Litecoin",
    toName: "Polkadot",
    fromImage: "src/publick/images/cryptos/litecoin-ltc-logo.png",
    toImage: "src/publick/images/cryptos/polkadot-new-dot-logo.png",
  },
];

const TokenCard = ({ pair }: { pair: typeof tokenPairs[number] }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        backgroundColor: "#1A1A1A",
        borderRadius: 4,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 8,
        },
      }}
    >
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar src={pair.fromImage} sx={{ width: 36, height: 36, mr: 1 }} />
        <Avatar src={pair.toImage} sx={{ width: 36, height: 36 }} />
      </Box>
      <Typography variant="h6" color="primary" fontWeight={700}>
        {pair.from} / {pair.to}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {pair.fromName} → {pair.toName}
      </Typography>
    </Paper>
  );
};

const ExchangeShowcase = () => {
  const { t } = useTranslation("translation", { keyPrefix: "top_pairs" });
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          {t("title")}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {t("subtitle")}
        </Typography>
      </Box>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ maxWidth: 1200, mx: "auto" }}
      >
        {tokenPairs.map((pair, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <TokenCard pair={pair} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExchangeShowcase;
