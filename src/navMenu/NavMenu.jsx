import { MenuItems } from "./MenuItems";
import { FaBars, FaReact, FaTimes } from "react-icons/fa";
import { useState } from "react";
import style from './NavMenu.module.css'
import { Button } from "./Button/Button";

const NavMenu = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () =>{
        setClicked(!clicked)
    }
    return (
        <nav className={style.navbarItems}>
            <h1 className={style.navbarLogo}>
                React <i className={style.reactIcon}>< FaReact/></i>
            </h1>
            <div className={style.navbarIcon} onClick={handleClick}>
           {clicked ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`clicked ? ${style.navMenu}: ${style.navMenu}`}>
                {
                    MenuItems.map(item =>{
                        return(

                            <li><a className={item.cName} href={item.url}>{item.title}</a></li>
                        )
                    })
                }
            </ul>
            <Button>Sign up</Button>
        </nav>
    );
};

export default NavMenu;