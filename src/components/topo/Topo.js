import React from 'react'
import css from "./topo.module.css"

export default function Topo({children}) {
    return (
        <div className={css.topo}>
            {children}
        </div>
    )
}
