import { useState } from "react";

const useModalEstado = () => {
  const [isAddOpen, setAddOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [itemToAction, setItemToAction] = useState(null);

  const toggleModal = (modalType) => {
    switch (modalType) {
      case "add":
        setAddOpen(!isAddOpen);
        break;
      case "edit":
        setEditOpen(!isEditOpen);
        break;
      case "delete":
        setDeleteOpen(!isDeleteOpen);
        break;
      default:
        break;
    }
  };

  return {
    isAddOpen,
    isEditOpen,
    isDeleteOpen,
    itemToAction,
    setItemToAction,
    toggleModal,
  };
};

export default useModalEstado;
