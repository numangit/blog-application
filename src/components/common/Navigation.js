import React from 'react';
import logo from '../../assets/LWSBlog.svg';

const Navigation = () => {
    return (
        <nav className="py-4 border-b">
            <div className="navbar-container">
                {/* <!-- logo --> */}
                <div className="logo">
                    <a href="index.html">
                        <img src={logo} alt="search" />
                    </a>
                </div>
                {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
                <div className="auth-buttons">
                    <button className="btn btn-primary">sign in</button>
                    <button className="btn btn-outline">sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;