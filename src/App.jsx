import { useState } from "react";
import { Link, Outlet, Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Loading from "./components/Loading";
import Calculator from "./components/Calculator/Calculator";

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
