import { Route, Routes } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";

import Layout from "./components/Loyout/Loyout";
import { lazy, Suspense } from "react";

import Loader from "./components/Loader/Loader.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const Camper = lazy(() => import("./pages/Camper/Camper"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/catalog"
            element={
              <Suspense fallback={<Loader />}>
                <Catalog />
              </Suspense>
            }
          />
          <Route
            path="/catalog/:id"
            element={
              <Suspense fallback={<Loader />}>
                <Camper />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
