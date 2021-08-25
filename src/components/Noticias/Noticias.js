import React, { useState, useEffect, useRef } from 'react'
import css from './noticias.module.css'
import { Noticia } from '../Noticia/Noticia'
import Button from '../Button/Button';
import calcHeight from '../../helpers/calcNewsHeight';
import Loading from '../../Loading/Loading';

export default function Noticias() {
    const width = useWindowSize()
    const [noticias, setNoticias] = useState();
    const [size, setSize] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const noticiasRef = useRef([]);


    const addToRef = (reference) => {
        if (reference && !noticiasRef.current.includes(reference)) {
            noticiasRef.current.push(reference)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://wp.deathsuit.com.br/wp-json/wp/v2/news?_embed");
                const json = await res.json();
                if (json.length < 6) {
                    setNoticias(json.slice(0, 3));
                } else {
                    setNoticias(json.slice(0, 6));
                }
                setIsLoading(false);
            } catch (err) {
                console.log(err)
            }
            setSize({
                height: calcHeight(noticiasRef) + "px",
            })
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (noticias) {
            setSize({
                height: calcHeight(noticiasRef) + "px",
            })
        }
    }, [width, noticias])



    function useWindowSize() {
        const [windowSize, setWindowSize] = useState(undefined);

        useEffect(() => {
            function handleResize() {
                setWindowSize(window.innerWidth)
            }
            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }, []);

        return windowSize
    }

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
                    isLoading ?
                        <Loading /> :
                        noticias.map((noticia) => {
                            return (
                                <Noticia ref={addToRef} key={noticia.id} noticia={noticia} />
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