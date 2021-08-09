import React from 'react'
import css from './section.module.css'
import Noticias from '../Noticias/Noticias'

export default function Section() {
    return (
        <div className={css.section}>
            <Noticias />
        </div>
    )
}
