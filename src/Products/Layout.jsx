import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav style={{ justifyContent: "left" }}>
                <ul style={{ listStyle: "none", display: "flex", }}>
                    <li style={{ margin: "0 10px" }}>
                        <Link to="/">Product</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;