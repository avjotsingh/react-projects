import CartButton from "../Cart/CartButton";
import classes from "./Header.module.css";

function Header(props) {  

  return (
    <header className={classes.header}>
      <h1>React Meals</h1>
      <CartButton />
    </header>
  );
}

export default Header;
