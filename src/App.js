import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Layout from "./components/Layout";
import Man from "./pages/Man";
import Woman from "./pages/Woman";
import Child from "./pages/Child";
import Favorites from "./pages/Favorites";
import Cart from "../src/Cart/Cart";
import CartProvider from "./store/cart-provider";
import ShopId from "./shop/ShopDetails";
function App() {
  const [cartIsShown, setCartIsshown] = useState(false);

  const showCartHandler = () => {
    setCartIsshown(true);
  };

  const hideCartHandler = () => {
    setCartIsshown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Layout onShowCart={showCartHandler}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/shop/man" element={<Man />}></Route>
          <Route path="/shop/woman" element={<Woman />}></Route>
          <Route path="/shop/child" element={<Child />}></Route>
          <Route path="/favorite" element={<Favorites />}></Route>
          <Route path="/shop/:id" element={<ShopId />}></Route>
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
