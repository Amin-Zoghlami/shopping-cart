import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <h1>Baseball Junkyard</h1>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Nav;
