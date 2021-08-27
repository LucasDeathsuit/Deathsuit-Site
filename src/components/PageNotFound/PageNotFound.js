import React from 'react'
import css from './pagenotfound.module.css'

export default function PageNotFound() {
    return (
        <div className={css.error}>
            <h2 className={css.title}>Essa página não existe.</h2>
            <p className={css.errordescription}>Este link parece estar quebrado :(</p>
        </div>
    )
}
