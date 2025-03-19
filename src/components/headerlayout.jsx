import React from "react";
import Header from "./header";
import { Outlet } from "react-router";

export default function HeaderLayout() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <Outlet />
      </div>
    </>
  );
}