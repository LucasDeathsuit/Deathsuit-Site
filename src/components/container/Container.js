import React from 'react'

import css from "./container.module.css"


export default function Container(props) {
    return (
        <div className={css.container}>
            {props.children}
        </div>
    )
}
