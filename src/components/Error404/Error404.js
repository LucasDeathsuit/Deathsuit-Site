import React from 'react'
import css from './error404.module.css'

export default function Error404() {
    return (
        <div className={css.error404Wrapper}>
            <div className={css.errorMessage}>
                <h2 className={css.title}>Essa página não existe :(</h2>
                <img className={css.image} src="/images/hey404.png" />
                <h2 className={css.title}>Saída pela esquerda</h2>
            </div>
        </div>
    )
}
