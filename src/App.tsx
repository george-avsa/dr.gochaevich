import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/pages/Main";
import Layout from "./components/pages/Layout";
import Prices from "./components/pages/Prices";
import fetchDynamicUrls from "./api/fetchMultipleUrls";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />}></Route>
        <Route path="prices" element={<Prices />}></Route>
        <Route path="*" element={<Prices />}></Route>
      </Route>
    </Routes>
  );
}
