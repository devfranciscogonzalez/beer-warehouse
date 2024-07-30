import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    background: {
      default: "#F5F5F5",
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          justifyContent: "center !important",
          textAlign: "center !important",
        },
      },
    },
    MUIDataTableHeadCell: {
      styleOverrides: {
        root: {
          "& span": {
            justifyContent: "center !important",
          },
        },
      },
    },
  },
});

export default theme;
