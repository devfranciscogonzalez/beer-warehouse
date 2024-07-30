import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useGenericMutation from "../../hooks/useGenericMutation";
import AccionModal from "./AccionModal";

import { useEffect } from "react";
import { PRODUCTO_SNACKBAR } from "../../constants/productoSnackbar";
import productosServicios from "../../services/productosServicios";
import { validacionProducto } from "../../utils/esquemaValidacion";
import ProductoCamposFormulario from "../Inputs/ProductoCamposFormulario";

const DEFAULT_VALORES_EDITAR_PRODUCTOS = {
  nombre: "",
  marca: "",
  precio: "",
};

const EditarProductoModal = ({ open, onClose, toEdit, onUpdated }) => {
  const { handleSubmit, reset, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(validacionProducto),
    defaultValues: DEFAULT_VALORES_EDITAR_PRODUCTOS,
  });

  useEffect(() => {
    if (toEdit) {
      reset({
        nombre: toEdit.nombre,
        marca: toEdit.marca,
        precio: toEdit.precio,
      });
    }
  }, [toEdit, reset]);

  const editarProductoMutation = useGenericMutation({
    mutationFn: (data) =>
      productosServicios.actualizarProducto(toEdit.id, data),
    successMessage: PRODUCTO_SNACKBAR.PRODUCTO_EDIT_SUCCESS.message,
    errorMessage: PRODUCTO_SNACKBAR.PRODUCTO_EDIT_ERROR.message,
    onSuccessCallback: () => {
      onClose?.();
      onUpdated?.();
    },
  });

  const onSubmit = (data) => {
    editarProductoMutation.mutate(data);
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
      isPending={editarProductoMutation.isPending}
      submitLabel="Agregar"
    >
      <ProductoCamposFormulario control={control} />
    </AccionModal>
  );
};

export default EditarProductoModal;
