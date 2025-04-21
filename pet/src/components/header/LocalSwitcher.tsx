import { useState, useCallback } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import appTheme from "../../theme";
import i18n from "../../i18n";

type LocaleOption = {
  label: string;
  code: "en" | "ru";
};

const localeList: LocaleOption[] = [
  { label: "English", code: "en" },
  { label: "Русский", code: "ru" },
];

const LocaleSwitcher = () => {
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const closeMenu = () => {
    setMenuAnchor(null);
  };

  const switchLanguage = useCallback((langCode: string) => {
    i18n.changeLanguage(langCode);
    closeMenu();
  }, []);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton size="small" onClick={openMenu}>
        <TranslateIcon />
      </IconButton>

      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={closeMenu}
        sx={{ mt: 1 }}
      >
        {localeList.map((option) => (
          <MenuItem
            key={option.code}
            onClick={() => switchLanguage(option.code)}
            sx={{
              pl: 2,
              borderLeft: i18n.language === option.code ? "3px solid" : "none",
              borderColor:
                i18n.language === option.code
                  ? appTheme.palette.primary.main
                  : "transparent",
            }}
          >
            <Typography variant="body2">{option.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export { LocaleSwitcher };
