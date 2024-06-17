import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "../../components/Home/Home";
import { Sneakers } from "../../components/Sneakers/Sneakers";
import { Boots } from "../../components/Boots/Boots";
import { Nav } from "../../components/Nav/Nav";
import { useFetchMenus } from "../../common/hooks/UseFetchMenus";
import { IMenusPages } from "oneentry/dist/menus/menusInterfaces";
import { UseFetchProducts } from "../../common/hooks/UseFetchProducts";

function App() {
  const [isTop, setIsTop] = useState(false);
  const [isLayoutRendered, setLayoutRendered] = useState(false);

  const { menus } = useFetchMenus();
  const { products } = UseFetchProducts();

  useEffect(() => {
    const timer = moveToTop();
    const finalLayoutTimer = renderFinalLayout();

    return () => {
      clearTimeout(timer);
      clearTimeout(finalLayoutTimer);
    };
  }, []);

  function moveToTop() {
    const timer = setTimeout(() => {
      setIsTop(true);
    }, 1000);

    return timer;
  }

  function renderFinalLayout() {
    const timer = setTimeout(() => {
      setLayoutRendered(true);
    }, 2000);

    return timer;
  }

  return (
    <div className="app">
      <header
        className={`app-header ${
          isLayoutRendered ? "app-header-minimized" : ""
        }`}
      >
        <h2 className={`title ${isTop ? "top" : ""}`}>Shoe'pify</h2>

        {isLayoutRendered && (
          <div className={`nav-container ${isLayoutRendered ? "visible" : ""}`}>
            <Nav data={menus?.pages as IMenusPages[]} />
          </div>
        )}
      </header>

      {isLayoutRendered && (
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home products={products} />} />
            <Route path="/products" element={<Home products={products} />} />
            <Route
              path="/sneakers"
              element={<Sneakers products={products} />}
            />
            <Route path="/boots" element={<Boots products={products} />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
