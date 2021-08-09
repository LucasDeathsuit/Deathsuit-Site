import React from 'react'
import css from './logo.module.css'

export default function Logo({logoSource, pos}) {
    return (
            <img className={pos ? css.footer : css.logo} src={logoSource} alt="logo"/>
    )
}
