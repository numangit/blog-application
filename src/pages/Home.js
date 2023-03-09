import React from 'react';
import BlogsContainer from '../components/home/BlogsContainer';
import Sidebar from '../components/home/Sidebar';

const Home = () => {
    return (
        <section className="wrapper">

            <Sidebar />

            <BlogsContainer />

        </section>
    );
};

export default Home;