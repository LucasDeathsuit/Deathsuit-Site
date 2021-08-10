import React, { useState, useEffect, useCallback } from 'react'
import css from './noticias.module.css'
import Noticia from '../Noticia/Noticia'
import Button from '../Button/Button';
import calcHeight from '../../helpers/calcNewsHeight';

export default function Noticias() {

    const [noticias, setNoticias] = useState();
    const [height, setHeight] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://192.168.100.159/site-banda/wp-json/wp/v2/news?_embed");
            const json = await res.json();
            setNoticias(json);
        }
        fetchData();
    }, [])

    const noticiaRef = React.forwardRef((props, red) => {
        

    });

    const noticiaControl = React.createRef();



    if (!noticias) return null;

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
                            <Noticia ref={noticiaControl} key={noticia.id} noticia={noticia} />
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