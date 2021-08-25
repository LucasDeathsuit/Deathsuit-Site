import React, { useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import css from './alert.module.css'

export default function Alert() {

    const [isError, setIsError] = useState(false);


    return (
        <div className={`${css.alert} ${isError ? css.error : css.success}`}>
            <div className={css.topo}>
                <BsCheckCircle size="2em"/>
                <h2>E-mail enviado</h2>
            </div>
            <p className={css.description}>Você receberá uma resposta em breve</p>
        </div>
    )
}
