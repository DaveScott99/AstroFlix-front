import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";

import Hub from "../pages/Hub";

export default function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Layout>
              <Hub />
            </Layout>
          }
        />
        <Route
          exact
          path="/movies"
          element={
            <Layout>
              <Hub title="Filmes" />
            </Layout>
          }
        />
        <Route
          exact
          path="/series"
          element={
            <Layout>
              <Hub title="Séries"/>
            </Layout>
          }
        />
        <Route
          exact
          path="/my-list"
          element={
            <Layout>
              <Hub title="Minha lista" />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
