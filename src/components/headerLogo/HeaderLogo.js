import React from 'react'
import css from "./HeaderLogo.module.css"
import Logo from '../logo/Logo';
import Header from '../Header/Header';

export default function HeaderLogo(props) {
    const { logo } = props;
    return (
        <>
            <Logo logoSource={logo} />
        </>
    )
}
