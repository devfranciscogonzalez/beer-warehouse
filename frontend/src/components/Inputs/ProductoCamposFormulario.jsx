import Grid from "@mui/material/Unstable_Grid2";
import CustomTextField from "./CustomTextField";

const ProductoCamposFormulario = ({ control }) => {
  const renderTextField = (name, label, maxLength, type, currency) => (
    <Grid xs={12}>
      <CustomTextField
        name={name}
        label={label}
        type={type}
        control={control}
        maxLength={maxLength}
        currency={currency}
        multiline
      />
    </Grid>
  );

  return (
    <>
      {renderTextField("nombre", "Nombre", 50, "text")}
      {renderTextField("marca", "Marca", 50, "text")}
      {renderTextField("precio", "Precio", 10, "number", "CLP")}
    </>
  );
};

export default ProductoCamposFormulario;
