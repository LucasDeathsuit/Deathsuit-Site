import React from 'react'
import Section from '../components/Section/Section'
import NavPanel from '../components/navPanel/NavPanel'
import Noticias from '../components/Noticias/Noticias'
import Footer from '../components/Footer/Footer'
import Topo from '../components/topo/Topo'
import Logo from '../components/logo/Logo'
import MainFooter from '../components/mainFooter/MainFooter'

export default function News() {
    return (
        <>
            <NavPanel />
            <Topo backgroundImage="url(Images/CapaGibi.png)">
            </Topo>
            <MainFooter/>
            <Section>
                <Noticias />
            </Section>
            <Footer />
        </>
    )
}
