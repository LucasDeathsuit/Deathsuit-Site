import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./Home";
import News from "./News";
import ContactUs from "./ContactUs";
import New from "./New";
import Page404 from "./Page404";

export default function router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={News} path="/news" exact />
                <Route component={News} path="/news/:id" exact />
                <Route component={ContactUs} path="/contact-us" exact />
                <Route component={New} path="/new/" exact />
                <Route component={New} path="/new/:id" exact />
                <Route component={Page404} />
            </Switch>
        </BrowserRouter>
    )
}