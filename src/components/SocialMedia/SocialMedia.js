import React from 'react'
import css from './socialmedia.module.css'

export default function SocialMedia({ logo, alt, link }) {
    return (
        <a className={css.socialmedialink} href={link}>
            <img className={css.socialmediaicon} src={`/Images/logos/${logo}.png`} alt={alt} />
        </a>
    )
}
