import React from 'react'
import css from './noticia.module.css'
import Button from '../Button/Button';

export default function Noticia({ noticia }) {


    const { picture, title, text, link } = noticia;

    return (
        <div className={css.noticiaWrapper}>
            <div className={css.noticia}>
                <a href={link}>
                    <img className={css.noticiapicture} src={picture} alt={title} />
                </a>
                <div className={css.text}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <a href={link}>
                    <Button>
                        Leia Mais
                    </Button>
                </a>
            </div >
        </div>
    )
}
