import React from "react";
import ProductPage from "../pages/Prouct";
import SignInPage from "../pages/Login/SignIn";
import SignOutPage from "../pages/Login/SigOut";
import HomePage from "../pages/Home";
import { Route, BrowserRouter } from "react-router-dom";


export default function RoutesNavegationPage() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/product"></Route>
                    <Route path="/signin" component={SignInPage} />
                    <Route path="/signout" component={SignOutPage} />
                </Switch>
            </BrowserRouter>
        </>
    )
}