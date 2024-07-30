import { Box } from "@mui/material";
import AceptarBoton from "./AceptarBoton";
import CancelarBoton from "./CancelarBoton";

const AccionBotones = ({
  acceptButtonLabel,
  cancelButtonLabel,
  acceptButtonIcon,
  cancelButtonIcon,
  onAccept,
  onCancel,
  isPending = false,
}) => (
  <Box
    sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
  >
    <AceptarBoton
      label={acceptButtonLabel}
      startIcon={acceptButtonIcon}
      onClick={onAccept}
      isPending={isPending}
      sx={{ mr: 1 }}
    />
    <CancelarBoton
      label={cancelButtonLabel}
      startIcon={cancelButtonIcon}
      onClick={onCancel}
      isPending={isPending}
      sx={{ ml: 1 }}
    />
  </Box>
);

export default AccionBotones;
