import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
