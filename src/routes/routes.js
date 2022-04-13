import React, { useState } from "react";

//npm install react-router-dom@5.2.0
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "../public/client/admin/dashboard/dasboard";

import Product from "../public/client/admin/products/products";
import EditProduct from "../public/client/admin/products/editproducts";
import SignUpProduct from "../public/client/admin/products/signupproducts";

import Users from "../public/client/admin/users/users";
import EditUser from "../public/client/admin/users/editusers";
import SignUpUser from "../public/client/admin/users/signupusers";

import HomePage from "../public/client/home/home";

import CustonForm from "../public/client/form/custonform"; 

import ProductDetails from "../public/client/products/detailsproducts";

import Login from "../public/client/login/login";

import { Button, ThemeProvider } from "@mui/material";
import { LightTheme } from "../shared/themes";
import { DarkTheme } from "../shared/themes";

export default function SetRoutes() {

    return (

        <ThemeProvider theme={DarkTheme}>
            <Router>
                <nav>
                    <Link to="/"> HomePage </Link>
                    <Link to="admin/user"> User </Link>
                    <Link to="admin/products"> Product </Link>
                    <Link to="login"> Login </Link>
                    <Link to="form"> Form </Link>
                </nav>
                <Routes>
                    {/* Rota Client */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products/:idProduct" element={<ProductDetails />}/>

                    {/* Rota Admin */}
                    <Route path="/admin" element={<Dashboard />}/>
                    <Route path="/admin/products" element={<Product />}/>
                    <Route path="/admin/products/signup" element={<SignUpProduct />}/>
                    <Route path="/admin/products/edit/:idProduct" element={<EditProduct />}/>

                    <Route path="/admin/user" element={<Users />}/>
                    <Route path="/admin/user/signup" element={<SignUpUser />}/>
                    <Route path="/admin/user/edit/:idProduct" element={<EditUser />}/>

                    <Route path="/form" element={<CustonForm />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/test" element={<Button variant="contained" color="primary">Teste</Button>}/>

                    <Route path="*" element={<Navigate to="/HomePage" />}/>
                    
                </Routes>
            </Router>
        </ThemeProvider>
    )
}