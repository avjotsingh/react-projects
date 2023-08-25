import {useState} from 'react'

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MainImage from "./components/Layout/MainImage";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    setShowModal(true);
  }

  const closeCartHandler = () => {
    setShowModal(false);
  }

  return (
    <CartProvider>
      {showModal && <Cart onClose={closeCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MainImage />
      <Meals />
    </CartProvider>
  );
}

export default App;
