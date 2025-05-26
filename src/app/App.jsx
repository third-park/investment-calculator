import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../widgets/Header/Header";

import "./styles/index.css";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const body = document.body;
    const bodyClass = body.classList;
    
    body.classList.remove(...bodyClass);

    if (location.pathname === "/") {
      body.classList.add("body-home");
    } else if (location.pathname.startsWith("/calculator")) {
      body.classList.add("body-calculator");
    } else if (location.pathname.startsWith("/minigame")) {
      body.classList.add("body-minigame");
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main>
        {isHome && (
          <section className="main">
            <h2>미니프로젝트</h2>
            <p>이것저것 만들어보자</p>
          </section>
        )}
        <Outlet />
      </main>
    </>
  );
}

export default App;
