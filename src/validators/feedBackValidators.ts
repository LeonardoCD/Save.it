import { Id, toast } from "react-toastify";

export function onLoadingError(message: string, load: Id) {
  toast.update(load, {
    render: message,
    type: "error",
    isLoading: false,
    autoClose: 4000,
    closeOnClick: true,
  });
}

export function onLoadingSuccess(message: string, load: Id) {
  toast.update(load, {
    render: message,
    type: "success",
    isLoading: false,
    autoClose: 4000,
    closeOnClick: true,
  });
}