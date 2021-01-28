import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./core/components/Navbar";
import PrivateRoute from "./core/components/Routes/PrivateRoute";
import Auth from "./pages/Auth";
import MovieCatalog from "./pages/MovieCatalog";
import MovieDetails from "./pages/MovieCatalog/components/MovieDetails";
import history from "./core/utils/history"

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
            <Route path="/" history={history}>
                <Auth/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
}


export default Routes;
