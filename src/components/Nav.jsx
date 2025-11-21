import { Link } from "react-router";
import styles from "./Nav.module.css";

function Nav({ cartQuantityTotal }) {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>Baseball Junkyard</h1>
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <div>
          <Link to="/cart">Cart</Link>
          <span>{cartQuantityTotal} items </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
