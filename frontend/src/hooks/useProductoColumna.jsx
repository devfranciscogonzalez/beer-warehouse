import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CustomIconButton from "../components/Button/CustomIconButton";
import PrecioChip from "../components/Chip/PrecioChip";

const useProductoColumna = (productos, onEdit, onDelete) => {
  const columns = [
    {
      name: "id",
      label: "ID",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => dataIndex + 1,
      },
    },
    {
      name: "nombre",
      label: "NOMBRE",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "marca",
      label: "MARCA",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "precio",
      label: "PRECIO",
      options: {
        filter: false,
        sort: true,
        customBodyRenderLite: (dataIndex) => {
          const precio = productos[dataIndex].precio;
          return <PrecioChip label={precio} />;
        },
      },
    },

    {
      name: "created_at",
      label: "FECHA DE CREACIÓN",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "updated_at",
      label: "FECHA DE ACTUALIZACIÓN",
      options: {
        filter: false,
        sort: true,
      },
    },

    {
      name: "actions",
      label: "ACCIONES",
      options: {
        filter: false,
        sort: false,
        empty: true,
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <CustomIconButton
                aria-label="edit"
                onClick={() => onEdit(productos[dataIndex])}
              >
                <EditIcon />
              </CustomIconButton>
              <CustomIconButton
                aria-label="delete"
                onClick={() => onDelete(productos[dataIndex].id)}
              >
                <DeleteIcon />
              </CustomIconButton>
            </>
          );
        },
      },
    },
  ];

  return columns;
};

export default useProductoColumna;
