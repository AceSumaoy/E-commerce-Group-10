import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/ProductPage'>ProductPage</Link>
        </nav>
    );      
}