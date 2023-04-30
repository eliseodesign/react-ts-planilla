import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react"; // Actualizado: importa 'Suspense' desde 'react'

const LandingView = lazy(async () => await import("./landing"));
const Aplication = lazy(async () => await import("./aplication"));

const Routing = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* Actualizado: envuelve el contenido de 'Routes' con 'Suspense' */}
      <Routes>
        <Route path="home" element={<LandingView />} />
        <Route path="app" element={<Aplication />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
