import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav({ cartQuantityTotal }) {
  return (
    <nav className={styles.nav}>
      <h1>Baseball Junkyard</h1>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
      <span>{cartQuantityTotal} items </span>
    </nav>
  );
}

export default Nav;
