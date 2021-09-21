import React from 'react';
import { Link } from 'react-router-dom';
import css from './NavItem.module.css'

export default function NavItem({ content }) {

    const { path, name, icon } = content;



    return (
        <>
            <li className={css.item}>
                <Link to={path} className={css.link}>
                    <div className={css.text}>
                        {name}
                        {icon ?
                            <span className={css.navIcon}> {icon} </span>
                            : false}
                    </div>
                </Link>
            </li>
        </>
    )
}
