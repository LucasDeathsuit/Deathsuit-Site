import React from 'react'
import Container from '../components/container/Container'
import NavPanel from '../components/navPanel/NavPanel'
import HeaderLogo from '../components/headerLogo/HeaderLogo'
import MainFooter from '../components/mainFooter/MainFooter'
import Header from '../components/Header/Header'
import Section from '../components/Section/Section'
import Footer from '../components/Footer/Footer'
import Noticias from '../components/Noticias/Noticias'
import Button from '../components/Button/Button'

export default function Home() {
    return (
        <Container>
            <NavPanel />
            <Header imageSource="Images/Fundo 01.png">
                <HeaderLogo logo="Images/Deathsuit Logo Preto.png" />
            </Header>
            <MainFooter />
            <Section>
                <Noticias />
                <Button theme="dark" link={'/news'}>Veja Mais</Button>
            </Section>
            <Footer />
        </Container>
    )
}
