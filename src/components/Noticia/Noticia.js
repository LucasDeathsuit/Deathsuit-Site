import React from 'react'
import css from './noticia.module.css'
import Button from '../Button/Button'
import formatText from '../../helpers/textFormatter';

export const Noticia = React.forwardRef( (props, forwardRef)  => {

    const {noticia} = props;

    const picture = noticia._embedded ? noticia._embedded['wp:featuredmedia']['0'].media_details.sizes.medium : "";
    const title = noticia.title.rendered;
    const text = noticia.excerpt.rendered;
    const link = noticia.link;

    return (
        <div ref={forwardRef} className={css.noticiaWrapper}>
            <div className={css.noticia}>
                <a className={css.noticiapicturewrapper} href={link}>
                    {
                    picture ? <img className={css.noticiapicture} src={picture.source_url} alt={title} /> : ""
                    }
                </a>
                <div className={css.text}>
                    <h2>{title}</h2>
                    <p>{formatText(text)}</p>
                </div>
                <a href={link}>
                    <Button>
                        Leia Mais
                    </Button>
                </a>
            </div >
        </div>
    )
});


