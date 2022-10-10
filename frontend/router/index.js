import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import SignInPage from "../src/pages/Login/SignIn/index";
import HomePage from "../src/pages/Home/index";
import Contacts from "../src/pages/Contacts/index";


export default function RoutesNavegationPage() {
    return (

        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={SignInPage} exact />
                    <Route path="/dashboard" element={HomePage} exact />
                    <Route path="/contacts" element={Contacts} exact />
                </Switch>
            </BrowserRouter>

        </>

    )
}