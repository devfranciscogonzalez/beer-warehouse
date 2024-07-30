const tablaOpciones = {
  filterType: "checkbox",
  responsive: "standard",
  selectableRows: "none",
  viewColumns: "false",
  textLabels: {
    body: {
      noMatch: "Lo sentimos, no se encuentran datos",
      toolTip: "Ordenar",
    },
    pagination: {
      next: "Siguiente página",
      previous: "Página anterior",
      rowsPerPage: "Filas por página:",
      displayRows: "de",
    },
    toolbar: {
      search: "Buscar",
      downloadCsv: "Descargar CSV",
      print: "Imprimir",
      viewColumns: "Ver Columnas",
      filterTable: "Filtrar Tabla",
    },
    filter: {
      all: "Todos",
      title: "FILTROS",
      reset: "REINICIAR",
    },
    viewColumns: {
      title: "Mostrar Columnas",
      titleAria: "Mostrar/Ocultar Columnas de la Tabla",
    },
    selectedRows: {
      text: "fila(s) seleccionadas",
      delete: "Eliminar",
      deleteAria: "Eliminar Filas Seleccionadas",
    },
  },
};

export default tablaOpciones;
