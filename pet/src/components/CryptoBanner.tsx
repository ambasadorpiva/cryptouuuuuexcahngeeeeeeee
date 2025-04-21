import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";
import CryptoConverter from "./convertor/Convertor";

const altTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffa726",
    },
    background: {
      default: "#10151f",
      paper: "#1a202c",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#9e9e9e",
    },
  },
  typography: {
    h3: {
      fontSize: "2.8rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
  },
});

const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <Box
    sx={{
      p: 3,
      borderRadius: 3,
      bgcolor: "background.paper",
      display: "flex",
      alignItems: "flex-start",
      gap: 2,
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: "0 6px 25px rgba(255,165,0,0.15)",
        transform: "translateY(-3px)",
      },
    }}
  >
    <Box
      sx={{
        p: 1.2,
        borderRadius: 2,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography variant="subtitle1" color="primary" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
  </Box>
);

const CryptoBanner = () => {
  const { t } = useTranslation();
  const [fromCurrency, setFromCurrency] = useState("USDT");
  const [toCurrency, setToCurrency] = useState("BTC");

  const activatePromo = () => {
    setFromCurrency("ETH");
    setToCurrency("USDT");
  };

  return (
    <ThemeProvider theme={altTheme}>
      <Box sx={{ bgcolor: "background.default", py: 12 }}>
        {/* Promo header */}
        <Box
          sx={{
            bgcolor: "primary.main",
            py: 2,
            mb: 8,
          }}
        >
          <Container maxWidth="lg">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" alignItems="center" gap={1}>
                <TrendingUp size={20} color="#fff" />
                <Typography color="white" fontWeight={600}>
                  {t("specialOffer.title")}
                </Typography>
              </Box>
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: "white", color: "primary.main", textTransform: "none" }}
                onClick={activatePromo}
              >
                {t("specialOffer.buttonText")}
              </Button>
            </Box>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Converter Section */}
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  bgcolor: "background.paper",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: "150%",
                    height: "150%",
                    background: "radial-gradient(rgba(255,165,0,0.1), transparent)",
                    zIndex: 0,
                  }}
                />
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <CryptoConverter
                    fromCurrency={fromCurrency}
                    toCurrency={toCurrency}
                    setFromCurrency={setFromCurrency}
                    setToCurrency={setToCurrency}
                  />
                </Box>
              </Paper>
            </Grid>

            {/* Feature & Text Section */}
            <Grid item xs={12} md={6}>
              <Box mb={6}>
                <Typography variant="h3" color="primary" gutterBottom>
                  {t("banner.heading")}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {t("banner.subHeading")}
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FeatureItem
                    icon={<TrendingUp size={28} color="#fff" />}
                    title={t("features.marketRates.title")}
                    description={t("features.marketRates.description")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FeatureItem
                    icon={<Zap size={28} color="#fff" />}
                    title={t("features.instantExchange.title")}
                    description={t("features.instantExchange.description")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FeatureItem
                    icon={<ShieldCheck size={28} color="#fff" />}
                    title={t("features.securePayments.title")}
                    description={t("features.securePayments.description")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CryptoBanner;
