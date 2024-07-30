import { useQuery } from "@tanstack/react-query";
import { adaptadorProducto } from "../../adapters/adaptadorProducto";
import PaperContainer from "../../components/Container/PaperContainer";
import DefaultLayout from "../../components/Layout/DefaultLayout";
import LoadingSkeleton from "../../components/Loading/LoadingSkeleton";
import AgregarPorductoModal from "../../components/Modal/AgregarPorductoModal";
import ProductoTable from "../../components/Table/ProductoTable";
import useAsyncAction from "../../hooks/useAsyncAction";
import useModalEstado from "../../hooks/useModalEstado";
import productosServicios from "../../services/productosServicios";
import EditarProductoModal from "../../components/Modal/EditarProductoModal";
import EliminarModalProducto from "../../components/Modal/EliminarModalProducto";

const Producto = () => {
  const { data: productos, isLoading } = useQuery({
    queryKey: ["productos"],
    queryFn: productosServicios.obtenerProductos,
    select: (data) => {
      if (typeof data === "string" && data.startsWith("{")) {
        try {
          const jsonData = JSON.parse(data.substring(1));
          return jsonData.map(adaptadorProducto);
        } catch (error) {
          console.error("Error al parsear los datos:", error);
        }
      }
      return data.map((producto) => adaptadorProducto(producto));
    },
  });

  const {
    isAddOpen,
    isEditOpen,
    isDeleteOpen,
    itemToAction,
    setItemToAction,
    toggleModal,
  } = useModalEstado();

  const { isSubmitting, handleAsyncAction } = useAsyncAction(productos);

  return (
    <DefaultLayout>
      <PaperContainer>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <ProductoTable
            productos={productos}
            onAdd={() => toggleModal("add")}
            onEdit={(product) => {
              setItemToAction(product);
              toggleModal("edit");
            }}
            onDelete={(product) => {
              setItemToAction(product);
              toggleModal("delete");
            }}
            isSubmitting={isSubmitting}
          />
        )}
        <AgregarPorductoModal
          open={isAddOpen}
          onClose={() => {
            toggleModal("add");
            setItemToAction(null);
          }}
          onAdded={() => handleAsyncAction()}
        />
        {itemToAction && (
          <>
            <EditarProductoModal
              open={isEditOpen}
              onClose={() => {
                toggleModal("edit");
                setItemToAction(null);
              }}
              toEdit={itemToAction}
              onUpdated={() => handleAsyncAction()}
            />
            <EliminarModalProducto
              open={isDeleteOpen}
              onClose={() => {
                toggleModal("delete");
                setItemToAction(null);
              }}
              toDelete={itemToAction}
              onDelete={() => handleAsyncAction()}
            />
          </>
        )}
      </PaperContainer>
    </DefaultLayout>
  );
};

export default Producto;
