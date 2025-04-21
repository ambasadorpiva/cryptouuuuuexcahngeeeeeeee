import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Paper,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c111b",
      paper: "#1c1f2b",
    },
    primary: {
      main: "#ff9800",
    },
    text: {
      primary: "#f0f0f0",
      secondary: "#b0b0b0",
    },
  },
});

const VoiceCard = ({
  avatar,
  name,
  title,
  feedback,
}: {
  avatar: string;
  name: string;
  title: string;
  feedback: string;
}) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      borderRadius: 3,
      backgroundColor: "background.paper",
      transition: "all 0.25s ease",
      "&:hover": {
        boxShadow: 8,
        transform: "scale(1.02)",
      },
    }}
  >
    <Box display="flex" alignItems="center" mb={2}>
      <Avatar src={avatar} alt={name} sx={{ width: 56, height: 56, mr: 2 }} />
      <Box>
        <Typography variant="subtitle1" fontWeight={600}>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
      </Box>
    </Box>
    <Typography variant="body1" color="text.primary">
      {feedback}
    </Typography>
  </Paper>
);

const UserVoices = () => {
  const { t } = useTranslation();
  const voices = t("reviews.testimonials", { returnObjects: true });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ py: 10, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: "primary.main", fontWeight: "bold", mb: 6 }}
          >
            {t("reviews.title")}
          </Typography>

          <Grid container spacing={4}>
            {voices.map((v, i) => (
              <Grid item xs={12} sm={6} md={4} key={`${v.id}-${i}`}>
                <VoiceCard
                  avatar={v.avatar}
                  name={v.name}
                  title={v.role}
                  feedback={v.content}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default UserVoices;
