import "./header.css";

const Header = () => {
    return (
        <div className="header-section">
            <p className="title">Flipkart</p>
            <input className="search-field" placeholder="Search for Products, Brands and More"></input>
            <p className="cart-field">Cart</p>
        </div>
    )
}

export default Header;