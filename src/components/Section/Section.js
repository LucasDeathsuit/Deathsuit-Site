import React from 'react'
import css from './section.module.css'

export default function Section({children}) {
    
    return (
        <div style={{backgroundImage: `url('../Images/Textura_02.jpg')`}} className={css.section}>
            {children}
        </div>
    )
}
