import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";


// replace eğer kullanıcı giriş yapmadıysa login sayfasına yönlendirilen kullanıcın tarayıcıdan geri gelmesini sağlar, Bunu yazmazsak kullanıcı geri sayfaya gidemez

const PrivateRouter = () => {
      const { currentUser } = useContext(AuthContext);
  return currentUser ? <Outlet/> : < Navigate to= "/login"  replace/>
};

export default PrivateRouter;
