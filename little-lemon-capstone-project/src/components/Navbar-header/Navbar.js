import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
//import MenuIcon from '@material-ui/icons/Menu'
import MenuIcon from '../../assets/hamburger.svg'
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] = useState(false)
    const navigate = useNavigate()

    //function to toggle(switch/swap?) menu (open/close)
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen)
    };

    const onClickImage = () => {
        navigate('/');  // navigate to home page
    };

    const menuItems = [
        { id: 1, name: 'Home', link: '/' },
        { id: 2, name: 'About', link: '/about' },
        { id: 3, name: 'Contact', link: '/contact' },
        { id: 4, name: 'Menu', link: '/menu' },
        { id: 5, name: 'Reserve', link: '/reserve' }
    ];

    return (
        <header className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" onClick={onClickImage} />
            </div>
            <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
                <ul className={`menu-list ${isMenuOpen ? 'show' : ''}`}>
                    {menuItems.map((item) => (
                        <li key={item.id} >
                            <a href={item.link} className="link">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="menu-toggle" onClick={toggleMenu}>
                <img src={MenuIcon} alt="menu-icon" />
            </div>
        </header>
    );
};

export default Navbar



//-----------------------------
// Notes:
/*
In JavaScript arrow functions, when you use curly braces {} without an explicit return statement,
the code inside the braces is treated as a block of statements, not as an expression. 
This means that if you use curly braces, you need to include a return statement if you want to return a value from the arrow function.

On the other hand, when you use parentheses () around the JSX inside an arrow function, 
it's treated as an expression, and the value of that expression is implicitly returned by the arrow function.

Here's the difference in how you can use {} and ():

Using {} without explicit return:

jsx
{menuItems.map((item) => {
    // This is a block of statements
    // Return statement is needed to return a value
    return (
        <li key={item.id}>
            <a href={item.link} className="link">
                {item.name}
            </a>
        </li>
    );
})}
Using () for implicit return:

jsx
{menuItems.map((item) => (
    // This is an expression, value is implicitly returned
    <li key={item.id}>
        <a href={item.link} className="link">
            {item.name}
        </a>
    </li>
))}
*/