import React, { useState } from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import css from './alert.module.css'

export default function Alert({alertType, isAlerting}) {

    const isOn = isAlerting ? "on" : "off";
    const title = alertType === "error" ? "Erro ao enviar E-mail" : "E-mail enviado";
    const description =  alertType === "error" ? "Tente novamente mais tarde" : "Você receberá uma resposta em breve";

    return (
        <div className={`${css.alert} ${css[alertType]} ${css[isOn]}`}>
            <div className={css.topo}>
                <BsCheckCircle size="2em"/>
                <h2>{title}</h2>
            </div>
            <p className={css.description}>{description}</p>
        </div>
    )
}
