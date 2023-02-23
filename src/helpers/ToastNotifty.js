import { toast } from "react-toastify";


// uyarı mesajları için fonksiyonlar tanımladım. Toastifay kütüphanesini kullandım.

export const toastWarnNotify = (msg) => {
  toast.warn(msg, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  
  });
};

export const toastSuccessNotify = (msg) => {
  toast.success(msg, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    
  });
};

export const toastErrorNotify = (msg) => {
  toast.error(msg, {
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
   
  });
};
