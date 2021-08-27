import React from 'react'
import css from './footer.module.css'

export default function Footer() {
    return (
        <div style={{
            backgroundImage: `URL("../Images/FooterBackground.png")`
        }}
        className={css.footer}>
            <img className={css.image} src={"../Images/Deathsuit Logo Preto.png"} alt="Deathsuit Logo" />
        </div>
    )
}
