import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import MainFooter from '../components/mainFooter/MainFooter'
import NavPanel from '../components/navPanel/NavPanel'
import Topo from '../components/topo/Topo'
import NewComponent from '../components/newComponent/NewComponent'
import Section from '../components/Section/Section'
import Footer from '../components/Footer/Footer'
import Noticias from '../components/Noticias/Noticias'
import Loading from '../components/Loading/Loading'
import PageNotFound from '../components/PageNotFound/PageNotFound'

export default function New() {

    const { id } = useParams();
    const [noticia, setNoticia] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`https://wp.deathsuit.com.br/wp-json/wp/v2/news/${id}?_embed`);
                if(res.status >= 400) {
                    throw "Página não existe"
                }
                const json = await res.json();
                setNoticia(json);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, [])


    return (
        <>
            <NavPanel />
            <Topo backgroundImage="url(../Images/CapaGibi.jpg)" />
            <Section>
                {
                    isError ?
                        <PageNotFound /> :
                        isLoading ? <Loading color="white" type="Oval" /> : <NewComponent noticia={noticia} />
                }
            </Section>
            <MainFooter />
            <Section>
                <Noticias noticiasPorPagina="9" />
            </Section>
            <Footer />
        </>
    )
}
