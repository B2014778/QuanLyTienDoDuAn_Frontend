import React from "react";
import { routes } from "./router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.page />}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
