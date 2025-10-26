import React from "react";
import Login from "../LoginPage/Login";
import Header from "../components/Header";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <header className="bg-base-200">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
