import { Link } from "react-router";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default Nav;
