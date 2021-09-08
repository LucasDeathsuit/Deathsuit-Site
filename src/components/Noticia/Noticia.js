import React from 'react'
import css from './noticia.module.css'
import Button from '../Button/Button'
import formatText from '../../helpers/textFormatter';
import DOMPurify from 'dompurify';

export const Noticia = React.forwardRef((props, forwardRef) => {

    const { noticia } = props;

    const picture = noticia._embedded ? noticia._embedded['wp:featuredmedia']['0'].media_details.sizes.medium : "";
    const title = noticia.title.rendered;
    const text = noticia.excerpt.rendered;
    const id = noticia.id

    return (
        <div ref={forwardRef} className={css.noticiaWrapper}>
            <div className={css.noticia} >
                <a className={css.noticiapicturewrapper} href={`/new/${id}`}>
                    {
                        picture ? <img className={css.noticiapicture} src={picture.source_url} alt={title} /> : ""
                    }
                </a>
                <div className={css.text}>
                    <div className={css.title} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(title) }}></div>
                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}></div>
                </div>
                <a href={`/new/${id}`}>
                    <Button>
                        Leia Mais
                    </Button>
                </a>
            </div >
        </div>
    )
});


