import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className="mb-4 text-2xl p-4 ">
                <NavLink className='mr-4 ' to='/'>Home</NavLink>
                <NavLink className='mr-4 ' to='contact'>Contact</NavLink>
                <NavLink className='mr-4 ' to='posts'>Posts</NavLink>
                <NavLink className='mr-4 ' to='about'>About</NavLink>
            </nav>
        </header>
    );
};

export default Header;