import { Box } from "@mui/material";
import MUIDataTable from "mui-datatables";
import tablaOpciones from "../../constants/tableOpciones";
import useProductoColumna from "../../hooks/useProductoColumna";
import ChipButton from "../Button/ChipButton";
import OverlayLoader from "../Loading/OverlayLoader";

const ProductoTable = ({
  productos,
  onAdd,
  onEdit,
  onDelete,
  isSubmitting,
}) => {
  const renderAddButton = () => {
    return <ChipButton label={"Agregar Producto"} onClick={onAdd} />;
  };
  const columns = useProductoColumna(productos, onEdit, onDelete);

  const options = {
    ...tablaOpciones,
    customToolbar: renderAddButton,
  };

  return (
    <Box position="relative">
      <OverlayLoader isLoading={isSubmitting} />
      <MUIDataTable data={productos} columns={columns} options={options} />
    </Box>
  );
};

export default ProductoTable;
