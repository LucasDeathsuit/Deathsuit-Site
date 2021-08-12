import React, { useState, useEffect, useRef } from 'react'
import css from './noticias.module.css'
import { Noticia } from '../Noticia/Noticia'
import Button from '../Button/Button';
import calcHeight from '../../helpers/calcNewsHeight';

export default function Noticias() {
    const width = useWindowSize()
    const [noticias, setNoticias] = useState();
    const [size, setSize] = useState({});
    const noticiaRef = useRef();



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://wp.deathsuit.com.br/wp-json/wp/v2/news?_embed");
            const json = await res.json();
            setNoticias(json.slice(0, 6));
            setSize({
                height: calcHeight(json.length, noticiaRef.current.getBoundingClientRect().height) + "px",
            })
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (noticias) {
            setSize({
                height: calcHeight(noticias.length, noticiaRef.current.getBoundingClientRect().height) + "px",
            })
        }
    }, [width, noticias])



    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                })
            }
            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize
    }

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
            <div style={size} className={css.noticias}>
                {
                    noticias.map((noticia) => {
                        return (
                            <Noticia ref={noticiaRef} key={noticia.id} noticia={noticia} />
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