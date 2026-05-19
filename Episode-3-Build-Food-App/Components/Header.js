
import { LOGO_URL } from '../utils/constants';
import './styles.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src={LOGO_URL}
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

