import React, { useState } from 'react'
import NavItem from '../navItem/NavItem'
import css from './NavPanel.module.css'
import MenuIcon from '@material-ui/icons/Menu';
import { LeftNavbarData, RightNavbarData } from '../../data/NavbarData';
import SideNavBar from '../SideNavBar/SideNavBar';

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
                        {
                            LeftNavbarData.map(navItem => {
                                return (
                                    <div className={css.navItem}>
                                        <NavItem content={navItem} />
                                    </div>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            {/* Mobile NavBar */}

            <SideNavBar isOpen={isShowingMenu}/>

            <ul className={`${css.items} ${css.rightRow}`}>
                {
                    RightNavbarData.map(navItem => {
                        return <NavItem content={navItem} />
                    })
                }
            </ul>
        </nav >
    )
}
