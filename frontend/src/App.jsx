import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { DrawerProvider } from "./contexts/DrawerProvider";
import { SnackbarProvider } from "./contexts/SnackbarProvider";
import MainApp from "./MainApp";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackbarProvider>
        <DrawerProvider>
          <MainApp />
        </DrawerProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
