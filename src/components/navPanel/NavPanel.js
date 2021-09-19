import React, { useState } from 'react'
import NavItem from '../navItem/NavItem'
import css from './NavPanel.module.css'
import MenuIcon from '@material-ui/icons/Menu';

export default function NavPanel() {

    const [isShowingMenu, setIsShowingMenu] = useState(false);

    const handleMenu = () => {
        setIsShowingMenu(!isShowingMenu)
    }

    return (
        <nav className={css.navPanel}>
            {/* Full NavBar */}
            <div className={css.items}>
                <MenuIcon className={css.menuIcon} onClick={handleMenu} />
                <div className={css.leftRow}>
                    <ul className={css.navItems}>
                        <NavItem content='Home' link="/"></NavItem>
                        <NavItem content='News' link="/news"></NavItem>
                        <NavItem content='Contato' link="/contact-us"></NavItem>
                    </ul>
                </div>
            </div>

            {/* Mobile NavBar */}

            <ul className={`${css.items} ${css.rightRow}`}>
                <NavItem icon="/Images/player.png" content="Ouça agora" link="https://www.youtube.com/watch?v=PV5YYa30QlE"></NavItem>
            </ul>
        </nav >
    )
}
