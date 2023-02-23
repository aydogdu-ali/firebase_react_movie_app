import React from "react";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContextProvider";

import AppRouter from "./router/AppRouter";

const App = () => {




// context ile tüm sayfalarımızı sarmaladık.
//Toastify kütüphanedinide heryerde kullanmak için app içinde çağırdım.
  return (
    <div >
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContextProvider>
    </div>
  );
};

export default App;
