import React from 'react'
import formatText from '../../helpers/textFormatter'
import css from "./newcomponent.module.css"

export default function NewComponent({ noticia }) {
    
    if(!noticia) return null

    const anexos = noticia._embedded["wp:featuredmedia"]

    return (
        <div className={css.newPanel}>
            <h1 className={css.title}>{noticia.title.rendered}</h1>
            <p className={css.text}>{formatText(noticia.content.rendered)}</p>
            
            {
                anexos.map(anexo => {
                    return <img key={anexo.id} className={css.image} src={anexo.media_details.sizes.large.source_url} alt={anexo.alt_text}/>
                })
            }

        </div>
    )
}
