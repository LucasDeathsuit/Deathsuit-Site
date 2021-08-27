import React from 'react'
import css from './button.module.css'

export default function Button({ children, theme, link }) {



    return (
        <a href={link}>
            <button className={theme ? css[theme] : css.button}>
                {children}
            </button>
        </a>
    )
}
