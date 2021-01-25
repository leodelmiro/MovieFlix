import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import PrivateRoute from "./core/components/Routes/PrivateRoute";
import Auth from "./pages/Auth";
import MovieCatalog from "./pages/MovieCatalog";
import MovieDetails from "./pages/MovieCatalog/components/MovieDetails";

const Routes = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <PrivateRoute path="/movies/:movieId">
                <MovieDetails/>
            </PrivateRoute>
            <PrivateRoute path="/movies">
                <MovieCatalog/>
            </PrivateRoute>
            <Route path="/">
                <Auth/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}


export default Routes;
