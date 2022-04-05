import React from "react";


//npm install react-router-dom@5.2.0
//import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import Dashboard from "./public/client/admin/dashboard/dasboard";

import Product from "./public/client/admin/products/products";
import EditProduct from "./public/client/admin/products/editproducts";
import SignUpProduct from "./public/client/admin/products/signupproducts";

import Users from "./public/client/admin/users/users";
import EditUser from "./public/client/admin/users/editusers";
import SignUpUser from "./public/client/admin/users/signupusers";

import HomePage from "./public/client/home/home";
import ProductDetails from "./public/client/products/detailsproducts";

export default function SetRoutes() {

    return (
        <Router>
            <nav>
                <Link to="/"> HomePage </Link>
                <Link to="admin/user"> User </Link>
                <Link to="admin/products"> Product </Link>
            </nav>
            <Routes>
                {/* Rota Client */}
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/products/:idProduct" element={<ProductDetails />}/>

                {/* Rota Admin */}
                <Route exact path="/admin" element={<Dashboard />}/>
                <Route exact path="/admin/products" element={<Product />}/>
                <Route exact path="/admin/products/signup" element={<SignUpProduct />}/>
                <Route exact path="/admin/products/edit/:idProduct" element={<EditProduct />}/>

                <Route exact path="/admin/user" element={<Users />}/>
                <Route exact path="/admin/user/signup" element={<SignUpUser />}/>
                <Route exact path="/admin/user/edit/:idProduct" element={<EditUser />}/>
            </Routes>
        </Router>
    )

}