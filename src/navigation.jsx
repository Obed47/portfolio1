import { RouterProvider, Routes, Route } from "react-router";
import Header from "./components/header/header";
import React from "react";

export default function Navigation() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
}
