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
    const main = document.querySelector('main');
    
    bodyClass.remove(...bodyClass);
    main.classList.remove(...main.classList);

    if (location.pathname.startsWith("/calculator")) {
      bodyClass.add("body-calculator");
    } else if (location.pathname.startsWith("/minigame")) {
      bodyClass.add("body-minigame");
    } else {
      bodyClass.add("body-home");
      main.classList.add('font-sans');
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <main className="">
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
