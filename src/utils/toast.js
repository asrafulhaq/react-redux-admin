import { toast } from "react-toastify";

// create a toast
export const createToast = (msg, type = "error") => {
  toast[type](msg);
};
