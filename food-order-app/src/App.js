import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MainImage from "./components/Layout/MainImage";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
import CheckoutProvider from "./store/CheckoutProvider";

function App() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <Cart />
      </CheckoutProvider>

      <Header />
      <MainImage />
      <Meals />
    </CartProvider>
  );
}

export default App;
