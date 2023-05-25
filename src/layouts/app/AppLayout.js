import React from 'react';
import FullLayout from "@layouts/app/FullLayout";
import AuthLayout from "@layouts/app/AuthLayout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import usePreferences from "@lib/usePreferences";
import theme from "../../theme/theme";
import { SnackbarProvider } from "notistack";
import Grow from '@mui/material/Grow';
import Snackbar from "@components/ui/Snackbar";
import FabDashboard from "@components/view/dashboard/FabDashboard";

function AppLayout({ isAuthLayout, children }) {
  const { preferences } = usePreferences();

  const mode = preferences.theme;

  const modeTheme = React.useMemo(
    () =>
      createTheme(theme, {
        palette: {
          mode: mode,
          background: {
            default: mode === 'dark' ? '#20232a' : '#fafbfb',
            dark: mode === 'dark' ? '#1c2025' : '#ffffff',
            paper: mode === 'dark' ? '#282C34' : '#ffffff',
          },
          text: {
            primary: mode === 'dark' ? '#e6e5e8' : 'rgba(0, 0, 0, 0.87)',
            secondary: mode === 'dark' ? '#adb0bb' : '#777e89',
          },
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={modeTheme}>
      <CssBaseline />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        TransitionComponent={Grow}
        content={(id, message) => <Snackbar id={id} message={message.message} severity={message.variant} />}
      >
        {isAuthLayout ? (
          <AuthLayout>
            {children}
          </AuthLayout>
        ) : (
          <FullLayout>
            {children}
            <FabDashboard />
          </FullLayout>
        )}
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default AppLayout;
