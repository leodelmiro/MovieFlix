import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import Auth from "./pages/Auth";
import MovieCatalog from "./pages/MovieCatalog";

const Routes = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/movies">
                <MovieCatalog/>
            </Route>
            <Route path="/">
                <Auth/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}


export default Routes;
