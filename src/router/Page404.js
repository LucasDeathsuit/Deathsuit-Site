import React from 'react'
import NavPanel from '../components/navPanel/NavPanel'
import Section from '../components/Section/Section'
import Error404 from '../components/Error404/Error404'
import MainFooter from '../components/mainFooter/MainFooter'

export default function Page404() {
    return (
        <>
            <NavPanel />
            <Section>
                <Error404 />
            </Section>
            <MainFooter />
        </>
    )
}
