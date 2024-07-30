import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Producto, Egreso, Ingreso, Traspaso } from "./pages";
import CustomSnackbar from "./components/Snackbar/CustomSnackbar";
import { useSnackbar } from "./hooks/useSnackbar";

const MainApp = () => {
  const { open, message, severity, closeSnackbar } = useSnackbar();

  return (
    <>
      <CustomSnackbar
        open={open}
        message={message}
        severity={severity}
        setOpen={closeSnackbar}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Producto />} />
          <Route path="/ingreso" element={<Ingreso />} />
          <Route path="/egreso" element={<Egreso />} />
          <Route path="/traspaso" element={<Traspaso />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainApp;
