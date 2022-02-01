import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
import AboutCompany from "../pages/AboutCompany";
import TestDrive from "../pages/TestDrive";
import ShowRooms from "../pages/ShowRooms";
import Delivery from "../pages/Delivery";
import {createTheme, ThemeProvider} from "@mui/material";
import SuccessPage from "../pages/SuccessPage";
import ScrollTop from "../components/ScrollTop";
import Error from "../pages/404";

const AppRoutes = () => {

    const routesArr = [
        {path: '/', component: Home},
        {path: '/about', component: AboutCompany},
        {path: '/testdrive', component: TestDrive},
        {path: '/showroom', component: ShowRooms},
        {path: '/delivery', component: Delivery},
        {path: '/success', component: SuccessPage},
        {path: '/404', component: Error}
    ]

    const theme = createTheme({
        breakpoints: {
            down: {
                mobile: 600,
                tablet: 768,
                laptop: 1024,
                desktop: 1440,
            },
        },
    });


    return (
        <BrowserRouter>
            <ScrollTop>
                <ThemeProvider theme={theme}>
                    <Switch>
                        {routesArr.map(route => (
                            <Route
                                key={route.path}
                                exact
                                {...route}
                            />
                        ))}
                        <Redirect to={'/404'}/>
                    </Switch>
                </ThemeProvider>
            </ScrollTop>
        </BrowserRouter>
    );
};

export default AppRoutes;
