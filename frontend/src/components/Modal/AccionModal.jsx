import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import AccionBotones from "../Button/AccionBotones";
import ModalLayout from "../Layout/ModalLayout";

const AccionModal = ({
  open,
  onClose,
  title,
  onSubmit,
  isPending,
  submitLabel,
  children,
}) => {
  return (
    <ModalLayout title={title} open={open} onClose={onClose}>
      <Box component="form" onSubmit={onSubmit} my={1} noValidate>
        <Grid container spacing={2}>
          {children}
          <Grid xs={12}>
            <AccionBotones
              acceptButtonLabel={submitLabel}
              onCancel={onClose}
              isPending={isPending}
            />
          </Grid>
        </Grid>
      </Box>
    </ModalLayout>
  );
};

export default AccionModal;
