import React from 'react'
import css from './Header.module.css'

export default function Header(props) {
    const { imageSource } = props;
    return (
        <div style={{backgroundImage: `url('${imageSource}')`}}className={css.header}>
            {props.children}
        </div>
    )
}
