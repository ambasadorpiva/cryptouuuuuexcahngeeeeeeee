import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Paper,
  Popper,
  ClickAwayListener,
  Container,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { LanguageSwitch } from "./LocalSwitcher";
import theme from "../../theme";

const TopNavigation = () => {
  const { t } = useTranslation("translation", { keyPrefix: "header" });
  const navigate = useNavigate();

  const [anchorSupport, setAnchorSupport] = useState<HTMLElement | null>(null);
  const [anchorLegal, setAnchorLegal] = useState<HTMLElement | null>(null);

  const sections = {
    help: [
      {
        label: t("contact_us"),
        desc: t("contact_us_description"),
        route: "/contact",
      },
      {
        label: t("about"),
        desc: t("about_description"),
        route: "/about",
      },
      {
        label: t("how_it_works"),
        desc: t("how_it_works_description"),
        route: "/how-it-works",
        badge: true,
      },
    ],
    policy: [
      {
        label: t("terms_of_service"),
        desc: t("terms_of_service_description"),
        route: "/terms",
      },
      {
        label: t("privacy_policy"),
        desc: t("privacy_policy_description"),
        route: "/privacy",
      },
      {
        label: t("aml_kyc"),
        desc: t("aml_kyc_description"),
        route: "/cookies",
      },
    ],
  };

  const toggleMenu = (
    event: React.MouseEvent<HTMLElement>,
    menu: "help" | "policy"
  ) => {
    if (menu === "help") {
      setAnchorSupport(anchorSupport ? null : event.currentTarget);
    } else {
      setAnchorLegal(anchorLegal ? null : event.currentTarget);
    }
  };

  const closeMenu = (menu: "help" | "policy") => {
    if (menu === "help") {
      setAnchorSupport(null);
    } else {
      setAnchorLegal(null);
    }
  };

  const handleRedirect = (route: string, menu: "help" | "policy") => {
    navigate(route);
    closeMenu(menu);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "primary.main",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            ChainXchange
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              onClick={(e) => toggleMenu(e, "help")}
              sx={{ color: "text.primary" }}
            >
              {t("support")}
            </Button>
            <Popper
              open={Boolean(anchorSupport)}
              anchorEl={anchorSupport}
              placement="bottom-start"
              sx={{ zIndex: 999 }}
            >
              <ClickAwayListener onClickAway={() => closeMenu("help")}>
                <Paper
                  sx={{
                    mt: 1,
                    p: 2,
                    width: 380,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 2,
                    boxShadow: 4,
                  }}
                >
                  {sections.help.map((option) => (
                    <Box
                      key={option.label}
                      onClick={() => handleRedirect(option.route, "help")}
                      sx={{
                        mb: 1.5,
                        p: 2,
                        borderRadius: 1,
                        cursor: "pointer",
                        "&:hover": { bgcolor: "action.hover" },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          mb: 0.5,
                        }}
                      >
                        <Typography variant="subtitle1">
                          {option.label}
                        </Typography>
                        {option.badge && (
                          <Typography
                            variant="caption"
                            sx={{
                              ml: 1,
                              px: 1,
                              py: 0.25,
                              bgcolor: "warning.main",
                              color: "warning.contrastText",
                              borderRadius: 1,
                            }}
                          >
                            New
                          </Typography>
                        )}
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {option.desc}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </ClickAwayListener>
            </Popper>

            <Button
              onClick={(e) => toggleMenu(e, "policy")}
              sx={{ color: "text.primary" }}
            >
              {t("legal")}
            </Button>
            <Popper
              open={Boolean(anchorLegal)}
              anchorEl={anchorLegal}
              placement="bottom-start"
              sx={{ zIndex: 999 }}
            >
              <ClickAwayListener onClickAway={() => closeMenu("policy")}>
                <Paper
                  sx={{
                    mt: 1,
                    p: 2,
                    width: 380,
                    bgcolor: theme.palette.background.paper,
                    borderRadius: 2,
                    boxShadow: 4,
                  }}
                >
                  {sections.policy.map((option) => (
                    <Box
                      key={option.label}
                      onClick={() => handleRedirect(option.route, "policy")}
                      sx={{
                        mb: 1.5,
                        p: 2,
                        borderRadius: 1,
                        cursor: "pointer",
                        "&:hover": { bgcolor: "action.hover" },
                      }}
                    >
                      <Typography variant="subtitle1">
                        {option.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {option.desc}
                      </Typography>
                    </Box>
                  ))}
                </Paper>
              </ClickAwayListener>
            </Popper>

            <LanguageSwitch />
            <Button variant="contained" color="primary">
              {t("connect_wallet")}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavigation;
