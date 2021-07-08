import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link
                to="/"
                style={{ color: "black", textDecoration: "none" }}
                className="flex align-center"
            >
                <i className="nes-pokeball "></i>
                <h1 className="mx-1">Poke</h1>
            </Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
