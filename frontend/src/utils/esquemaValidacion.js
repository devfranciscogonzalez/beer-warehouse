import * as yup from "yup";

export const validacionProducto = yup.object().shape({
  nombre: yup
    .string()
    .required("El nombre es requerido")
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre no puede tener más de 50 caracteres"),
  marca: yup
    .string()
    .required("La descripción es requerida")
    .min(3, "La marca debe tener al menos 3 caracteres")
    .max(50, "La marca no puede tener más de 50 caracteres"),
  precio: yup
    .number()
    .typeError("El precio debe ser un número")
    .required("El precio es requerido")
    .test(
      "len",
      "El precio debe tener entre 3 y 10 dígitos",
      (val) => val && val.toString().length >= 3 && val.toString().length <= 10
    ),
});
