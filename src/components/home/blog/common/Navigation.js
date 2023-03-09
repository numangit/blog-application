import React from 'react';

const Navigation = () => {
    return (
        <nav class="py-4 border-b">
            <div class="navbar-container">
                {/* <!-- logo --> */}
                <div class="logo">
                    <a href="index.html">
                        <img src="./images/LWSBlog.svg" alt="search" />
                    </a>
                </div>
                {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
                <div class="auth-buttons">
                    <button class="btn btn-primary">sign in</button>
                    <button class="btn btn-outline">sign up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;