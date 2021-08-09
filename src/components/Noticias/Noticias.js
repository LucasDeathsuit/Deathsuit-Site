import React, { useState } from 'react'
import css from './noticias.module.css'
import Noticia from '../Noticia/Noticia'
import Button from '../Button/Button';

export default function Noticias() {


    const [noticias, setNoticias] = useState([
        {
            id: 1,
            picture: "/Images/Capa.png",
            title: "Titulo 1",
            text: "Texto Texto Texto Texto Texto Tasdexto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texaeaehto Texto Texto Teaxt",
            link: "/Images/Capa.png"
        },
        {
            id: 2,
            picture: "/Images/Capa.png",
            title: "Titulo 1",
            text: "Hoje foi um dia bem bacaninha Hoje foi um dia bem bacaninha Hoje foi um dia bem bacaninha Hoje foi um dia bem bacaninha Hoje foi um dia bem bacaninha",
            link: "/Images/Capa.png"
        },
        {
            id: 3,
            picture: "/Images/Capa.png",
            title: "Titulo 1",
            text: "Hoje foi um dia bem bacaninha",
            link: "/Images/Capa.png"
        },
        {
            id: 4,
            picture: "/Images/Capa.png",
            title: "Titulo 1",
            text: "Hoje foi um dia bem bacaninha",
            link: "/Images/Capa.png"
        },
        {
            id: 5,
            picture: "/Images/Capa.png",
            title: "Titulo 1",
            text: "Hoje foi um dia bem bacaninha",
            link: "/Images/Capa.png"
        },
        {
            id: 6,
            picture: "/Images/Capa.png",
            title: "Titulo 1",
            text: "Hoje foi um dia bem bacaninha",
            link: "/Images/Capa.png"
        }
    ]);




    return (
        <div id="noticias" className={css.noticiasPanel}>
            <div className={css.topo}>
                <div className={css.titulo}>
                    <h1>Novidades</h1>
                    <div className={css.border}>

                    </div>
                </div>
            </div>
            <div className={css.noticias}>
                {
                    noticias.map((noticia) => {
                        return (
                            <Noticia key={noticia.id} noticia={noticia} />
                        )
                    })
                }
            </div>

            <div className={css.button}>
                <a href='/News'>
                    <Button theme="dark">Veja Mais</Button>
                </a>
            </div>
        </div>
    )

}