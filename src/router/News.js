import React, { useState } from 'react'
import Section from '../components/Section/Section'
import NavPanel from '../components/navPanel/NavPanel'
import Noticias from '../components/Noticias/Noticias'
import Footer from '../components/Footer/Footer'
import Topo from '../components/topo/Topo'
import MainFooter from '../components/mainFooter/MainFooter'
import { useParams } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination';
import Paginador from '../components/Paginador/Paginador'

export default function News() {

    const { id } = useParams();

    const [pagina, setPagina] = useState(id ? parseInt(id, 10) : 1);
    const [totalPaginas, setTotalPaginas] = useState();

    const handlePageChange = (event, value) => {
        setPagina(value);
    }

    const handlePagesCallback = (paginas) => {
        setTotalPaginas(paginas);
    }

    return (
        <>
            <NavPanel />
            <Topo backgroundImage="url(../Images/CapaGibi.png)">
            </Topo>
            <MainFooter />
            <Section>
                <Noticias atualizaQuantidadePaginas = {handlePagesCallback} pagina={pagina} />
                <Paginador>
                    <Pagination count={totalPaginas} page={pagina} onChange={handlePageChange} color="primary" />
                </Paginador>
            </Section>
            <Footer />
        </>
    )
}
