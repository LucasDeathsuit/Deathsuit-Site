import React from 'react'
import css from "./HeaderLogo.module.css"
import Logo from '../logo/Logo';

export default function HeaderLogo(props) {
    const { imageSource } = props;
    return (
        <div className={css.header}>
            <img className={css.image} src={imageSource} alt="Janela" />
            <Logo logoSource="Images/Deathsuit Logo Preto.png"/>
        </div >
    )
}
