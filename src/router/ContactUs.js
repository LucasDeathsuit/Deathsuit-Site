import React, { useState } from 'react'
import NavPanel from '../components/navPanel/NavPanel'
import MainFooter from '../components/mainFooter/MainFooter'
import Header from '../components/Header/Header'
import ContactForm from '../components/ContactForm/ContactForm'

export default function ContactUs() {

    return (
        <>
            <NavPanel />
            <Header imageSource="Images/Fundo 01.png">
                <ContactForm />
            </Header>
            <MainFooter />
        </>
    )
}
