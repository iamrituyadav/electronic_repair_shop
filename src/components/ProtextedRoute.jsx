// /orders and /neworder are protected routes
import { store } from "../Redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export const ProtectedRoute = ({ children }) => {
  const store = useSelector((store) => {
    return store;
  });

  if (store.role == "admin") {
    return <Navigate to="/newOrders" replace={true} />;
  } else if (store.role == "client") {
    return <Navigate to="/orders" replace={false} />;
  }
};
