import makeRequest from "./api/makeRequest";

const productosServicios = {
  agregarProducto({ nombre, marca, precio }) {
    return makeRequest("post", "/api/productos", { nombre, marca, precio });
  },

  obtenerProductos() {
    return makeRequest("get", "/api/productos");
  },

  eliminarProducto(productoId) {
    return makeRequest("delete", `/api/productos/${productoId}`);
  },

  actualizarProducto(productoId, { nombre, marca, precio }) {
    return makeRequest("put", `/api/productos/${productoId}`, {
      nombre,
      marca,
      precio,
    });
  },
};

export default productosServicios;
