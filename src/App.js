import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

const Table = React.lazy(() => import("./pages/Table/Table"));

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="*" element={<Table />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;