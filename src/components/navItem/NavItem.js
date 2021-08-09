import React from 'react';
import css from './NavItem.module.css'

export default function NavItem({ content, link, icon }) {
    return (
        <>
            <a href={link} className={css.item}>
                <li >
                    <div className={css.text}>
                        {content}
                        {icon ? <img src={icon}/> :  false}
                    </div>
                </li>
            </a>
        </>
    )
}
