import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import News from "./News";
import ContactUs from "./ContactUs";

export default function router() {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={News} path="/news" exact />
            <Route component={News} path="/news/:id" exact />
            <Route component={ContactUs} path="/contact-us" exact />
        </BrowserRouter>
    )
}