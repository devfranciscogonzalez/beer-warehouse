import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import AccionModal from "./AccionModal";
import useGenericMutation from "../../hooks/useGenericMutation";
// import { PRODUCT_SNACKBAR } from "../../constants/productSnackbar";
// import { productService } from "../../services/productService";
import { validacionProducto } from "../../utils/esquemaValidacion";
import ProductoCamposFormulario from "../Inputs/ProductoCamposFormulario";
import { PRODUCTO_SNACKBAR } from "../../constants/productoSnackbar";
import productosServicios from "../../services/productosServicios";

const DEFAULT_VALORES_PRODUCTOS = {
  nombre: "",
  marca: "",
  precio: "",
};

const AgregarPorductoModal = ({ open, onClose, onAdded }) => {
  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validacionProducto),
    defaultValues: DEFAULT_VALORES_PRODUCTOS,
  });

  const agregarProductoMutation = useGenericMutation({
    mutationFn: productosServicios.agregarProducto,
    successMessage: PRODUCTO_SNACKBAR.PRODUCTO_AGREGAR_ERROR.message,
    errorMessage: PRODUCTO_SNACKBAR.PRODUCTO_AGREGAR_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onAdded?.();
    },
  });

  const onSubmit = (data) => {
    agregarProductoMutation.mutate(data);
  };

  // Reset campos del formulario al cerrar el modal
  const handleClose = () => {
    reset();
    onClose();
  };

  return (
    <AccionModal
      open={open}
      onClose={handleClose}
      title="Agregar Producto"
      onSubmit={handleSubmit(onSubmit)}
      isPending={agregarProductoMutation.isPending}
      submitLabel="Agregar"
    >
      <ProductoCamposFormulario control={control} />
    </AccionModal>
  );
};

export default AgregarPorductoModal;
