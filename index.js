import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

    
   
const Navbar = (
    <nav>
     <h1>Gandalfs Grocery</h1>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
        </ul>
    </nav>
);
   
ReactDOM.createRoot(document.getElementById("root"))
root.render(Navbar);