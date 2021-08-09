import React from 'react'
import css from './button.module.css'

export default function Button({ children, theme }) {



    return (
        <div>
            <button className={theme ? css[theme] : css.button}>{children}</button>
        </div>
    )
}
