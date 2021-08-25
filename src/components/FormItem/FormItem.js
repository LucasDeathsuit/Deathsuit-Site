import React from 'react'
import css from './formItem.module.css'

export default function FormItem({children}) {
    return (
        <div className={css.formItem}>
            {children}
        </div>
    )
}
