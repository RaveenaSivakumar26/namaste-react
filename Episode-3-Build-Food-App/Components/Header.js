import foodlogo from '../images/foodlogo.png';

const Header = () => {
    return (<div className="header">
        <div className='logo'><img src="../images/foodlogo.png" alt="logo" width={150} height={150} /></div>
        <div>
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>CONTACT US</li>
                <li>CART</li>
            </ul>
        </div>
    </div>)
}

export default Header;
