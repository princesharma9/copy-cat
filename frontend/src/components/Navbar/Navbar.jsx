import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">ShopKart</div>

      <div className="navbar__search">
        <input type="text" placeholder="Search products..." />
      </div>

      <div className="navbar__actions">
        <button className="login-btn">Login</button>

        <button className="cart-btn">Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
