import React from 'react'
import NavItem from '../navItem/NavItem'
import css from './NavPanel.module.css'

export default function NavPanel() {
    return (
        <nav className={css.navPanel}>
            <ul className={css.items}>
                <NavItem content='Home' link="/"></NavItem>
                <NavItem content='News' link="/news"></NavItem>
                <NavItem content='Contato' link="/contact-us"></NavItem>
            </ul>
            <ul className={`${css.items} ${css.rightRow}`}>
                <NavItem icon="/Images/player.png" content="Ouça agora" link="https://www.youtube.com/watch?v=PV5YYa30QlE"></NavItem>
            </ul>
        </nav>
    )
}
