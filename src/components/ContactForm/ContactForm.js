import React, { useState, useEffect } from 'react'
import FormItem from '../FormItem/FormItem'
import css from './contactForm.module.css'
import Button from '../Button/Button'
import Alert from '../Alert/Alert'
import Loading from '../Loading/Loading'

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isAlerting, setIsAlerting] = useState(false);
    const [alertType, setAlertType] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    }

    const sendEmail = async () => {
        let res = null;
        setIsLoading(true);
        try {
            res = await fetch("http://wp.deathsuit.com.br/wp-json/contact-us/v1/send", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contact_name: name,
                    contact_email: email,
                    contact_message: message,
                })
            });
            if (res.status == 200) {
                setAlertType("success")
                clearForm();
            } else {
                setAlertType("error")
            }
            console.log(res);
        } catch (err) {
            console.log(err)
        } finally {
            setIsAlerting(true);
            setTimeout(() => {
                setIsAlerting(false);
            }, 4000);
            setIsLoading(false);
        }
    }

    const clearForm = () => {
        setName("");
        setEmail("");
        setMessage("");
    }


    return (
        <div className={css.formWrapper}>
            <Alert isAlerting={isAlerting} alertType={alertType} />
            {isLoading ? <Loading fixed="fixed" color="white" type="Grid"/> : ""}
            <form onSubmit={handleSubmit} className={css.form}>
                <FormItem>
                    <label className={css.label} htmlFor="nome">
                        Nome
                    </label>
                    <input value={name} className={css.textField} type="text" id="nome" required onChange={handleNameChange} />
                </FormItem>

                <FormItem>
                    <label className={css.label} htmlFor="email">
                        E-mail
                    </label>
                    <input value={email} className={css.textField} type="email" id="email" placeholder="email@example.com" required onChange={handleEmailChange} />
                </FormItem>

                <FormItem><label className={css.label} htmlFor="mensagem">
                    Mensagem
                </label>
                    <textarea value={message} className={`${css.textField} ${css.textArea}`} id="mensagem" required onChange={handleMessageChange} />
                </FormItem>
                <div className={css.submitWrapper}>
                    <Button type="submit">Enviar</Button>
                </div>

            </form>
        </div >
    )
}
