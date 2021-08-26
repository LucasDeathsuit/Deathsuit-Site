import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import css from "./loading.module.css"

export default function Loading({type, fixed, color}) {
    return (
        <div className={`${css.loader} ${css[fixed]}`}>
            <Loader
                type={type}
                color={color}
                height={80}
                width={80}
            />
        </div>
    )
}
