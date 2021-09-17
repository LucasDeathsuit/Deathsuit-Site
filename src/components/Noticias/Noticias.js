import React, { useState, useEffect, useRef } from 'react'
import css from './noticias.module.css'
import { Noticia } from '../Noticia/Noticia'
import calcHeight from '../../helpers/calcNewsHeight';
import Loading from '../Loading/Loading';
import PageNotFound from '../PageNotFound/PageNotFound';
import { getNewsPage } from '../../api/apiService';

export default function Noticias({ pagina, atualizaQuantidadePaginas, noticiasPorPagina }) {
    const width = useWindowSize()
    const [noticias, setNoticias] = useState();
    const [size, setSize] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const noticiasRef = useRef([]);

    const page = !pagina ? 1 : pagina


    const addToRef = (reference) => {
        if (reference && !noticiasRef.current.includes(reference)) {
            noticiasRef.current.push(reference)
        }
    }

    const setTotalPages = (quantidade) => {
        atualizaQuantidadePaginas(quantidade)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                noticiasRef.current.length = 0;
                setIsLoading(true)
                setSize({
                    height: calcHeight(noticiasRef) + "px",
                })
                const res = await getNewsPage(page, noticiasPorPagina);
                if (res.status >= 400) {
                    throw "Página não existe"
                }
                setNoticias(res.data);
                setIsLoading(false);
                setTotalPages(res.headers["x-wp-totalpages"])
            } catch (err) {
                console.log(err)
                setIsLoading(false)
            }
            setSize({
                height: calcHeight(noticiasRef) + "px",
            })
        }
        fetchData();
    }, [pagina])


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
                        <Loading color="white" type="Oval" /> :
                        !noticias ?
                            <PageNotFound /> :
                            noticias.map((noticia) => {
                                return (
                                    <Noticia ref={addToRef} key={noticia.id} noticia={noticia} />
                                )
                            })
                }
            </div>
        </div>
    )

}