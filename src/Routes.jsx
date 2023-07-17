import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LiteModeOne = React.lazy(() => import("pages/LiteModeOne"));
const LiteModeFive = React.lazy(() => import("pages/LiteModeFive"));
const LiteModeTwo = React.lazy(() => import("pages/LiteModeTwo"));
const LiteMode = React.lazy(() => import("pages/LiteMode"));
const LiteModeFour = React.lazy(() => import("pages/LiteModeFour"));
const LiteModeThree = React.lazy(() => import("pages/LiteModeThree"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/litemodethree" element={<LiteModeThree />} />
          <Route path="/litemodefour" element={<LiteModeFour />} />
          <Route path="/litemode" element={<LiteMode />} />
          <Route path="/litemodetwo" element={<LiteModeTwo />} />
          <Route path="/litemodefive" element={<LiteModeFive />} />
          <Route path="/litemodeone" element={<LiteModeOne />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
