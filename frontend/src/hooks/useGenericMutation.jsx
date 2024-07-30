import { useMutation } from "@tanstack/react-query";
import { useSnackbar } from "./useSnackbar";

const useGenericMutation = ({
  mutationFn,
  successMessage,
  errorMessage,
  onSuccessCallback,
}) => {
  const { showSnackbar } = useSnackbar();

  return useMutation({
    mutationFn,
    onError: (error) => {
      showSnackbar(errorMessage || error?.message, "error");
    },
    onSuccess: (data) => {
      showSnackbar(successMessage || data?.message, "success");
      onSuccessCallback?.();
    },
  });
};

export default useGenericMutation;
