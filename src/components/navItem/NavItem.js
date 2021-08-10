import React from 'react';
import css from './NavItem.module.css'

export default function NavItem({ content, link, icon }) {
    return (
        <>
            <li className={css.item}>
                <a href={link} className={css.link} >
                    <div className={css.text}>
                        {content}
                        {icon ? <img src={icon} alt="Player"/> : false}
                    </div>
                </a>
            </li>
        </>
    )
}
