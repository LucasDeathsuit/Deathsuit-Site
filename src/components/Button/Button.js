import React from 'react'
import css from './button.module.css'

export default function Button({ children, theme }) {



    return <button className={theme ? css[theme] : css.button}>{children}</button>
}
