import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import '../App.css';
import About from '../components/About';

const Layout = () => {
    return (
        <div className="layout">

            <div className="content-wrapper">
                <Sidebar />
                <About />
                <main className="main-content">
                    <Outlet />
                </main>
            </div>

        </div>
    );
};

export default Layout;
