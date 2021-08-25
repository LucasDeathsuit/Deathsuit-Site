import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import css from "./loading.module.css"

export default function Loading() {
    return (
        <div className={css.loader}>
            <Loader
                type="Oval"
                color="#ffffff"
                height={80}
                width={80}
            />
        </div>
    )
}