import React, { useState, useEffect } from 'react'
import FormItem from '../FormItem/FormItem'
import css from './contactForm.module.css'
import Button from '../Button/Button'

export default function ContactForm() {

    const [name, setName] = useState("eaí");
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubjectChange = (e) => {
        setName(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // sendEmail();
        cleanForm();
    }

    const sendEmail = async () => {
        const res = await fetch("http://wp.deathsuit.com.br/wp-json/contact-us/v1/send", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contact_name: name,
                contact_email: email,
                contact_message: message,
            })
        });
        console.log(res);
    }

    const cleanForm = () => {
        const test = "";
        setName({});
        setEmail({});
        setMessage({});
    }

    useEffect(() => {
    }, [name])
    

    return (
        <div className={css.formWrapper}>
            <form onSubmit={handleSubmit} className={css.form}>
                <FormItem>
                    <label className={css.label} htmlFor="nome">
                        Nome
                    </label>
                    <input className={css.textField} type="text" id="nome" required onChange={handleSubjectChange} />
                </FormItem>

                <FormItem>
                    <label className={css.label} htmlFor="email">
                        E-mail
                    </label>
                    <input className={css.textField} type="email" id="email" placeholder="email@example.com" required onChange={handleEmailChange} />
                </FormItem>

                <FormItem><label className={css.label} htmlFor="mensagem">
                    Mensagem
                </label>
                    <textarea className={`${css.textField} ${css.textArea}`} id="mensagem" required onChange={handleMessageChange} />
                </FormItem>
                <div className={css.submitWrapper}>
                    <Button type="submit">Enviar</Button>
                </div>

            </form>
        </div >
    )
}
