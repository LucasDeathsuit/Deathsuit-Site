import React from 'react'
import css from './paginador.module.css'

export default function Paginador({children}) {
    return (
        <div className={css.paginadorWrapper}>
            {children}
        </div>
    )
}
