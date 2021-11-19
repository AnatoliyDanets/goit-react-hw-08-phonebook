import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "./redux/auth/auth-operations";
import Container from "./components/Container";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { getAuthRefresh } from "./redux/auth/auth-selectors";
import LoaderComponent from "./components/Loader/Loader";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() =>
  import("./views/HomePage/Home" /* webpackChunkName: "HomePage" */)
);
const Register = lazy(() =>
  import("./views/RegisterPage/Register" /* webpackChunkName: "Register" */)
);
const Login = lazy(() =>
  import("./views/LoginPage/Login" /* webpackChunkName: "LoginPage" */)
);
const Contacts = lazy(() =>
  import("./views/ContactsPage/Contacts" /* webpackChunkName: "ContactsPage" */)
);

export default function App() {
  const isAuthRefresh = useSelector(getAuthRefresh);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isAuthRefresh && (
      <Container>
        <Header />
        <Suspense fallback={<LoaderComponent />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<PublicRoute children={<Register />} restricted />}
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  children={<Login />}
                  redirectTo="/contacts"
                  restricted
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute children={<Contacts />} redirectTo="/login" />
              }
            />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </Container>
    )
  );
}
