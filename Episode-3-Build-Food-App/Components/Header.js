import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"
          alt="logo"
          width={150}
          height={100}
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

