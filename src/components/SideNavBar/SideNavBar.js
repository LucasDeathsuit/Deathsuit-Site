import React from 'react'
import { LeftNavbarData, RightNavbarData } from '../../data/NavbarData'
import NavItem from '../navItem/NavItem';
import css from './sidenavbar.module.css'

export default function SideNavBar({ isOpen }) {

    const navItems = LeftNavbarData.concat(RightNavbarData);

    return (
        <div className={`${css.sideNavBar} ${isOpen ? css.sideNavBarOpen : css.sideNavBarClosed}`}>
            <ul>
                {
                    navItems.map(navItem => {
                        return (
                            <div className={css.item}>
                                <NavItem content={navItem} />
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
