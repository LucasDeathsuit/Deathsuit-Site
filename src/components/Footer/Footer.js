import React from 'react'
import css from './footer.module.css'

export default function Footer() {
    return (
        <div style={{
            backgroundImage: `URL("Images/20.jpg")`
        }}
        className={css.footer}>
            <img className={css.image} src={"Images/Deathsuit Logo Preto.png"} alt="Deathsuit Logo" />
        </div>
    )
}
