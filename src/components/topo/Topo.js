import React from 'react'
import css from "./topo.module.css"

export default function Topo(props) {

    const {backgroundImage} = props;
    
    return (
        <div style={{backgroundImage: backgroundImage, backgroundAttachment: 'local'}} className={css.topo}>
        </div>
    )
}
