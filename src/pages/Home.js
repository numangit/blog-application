import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BlogsContainer from '../components/home/BlogsContainer';
import Sidebar from '../components/home/Sidebar';
import { fetchBlogs } from '../features/blogs/blogsSlice';

const Home = () => {
    const dispatch = useDispatch();

    //fetch blogs when page renders
    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    return (
        <section className="wrapper">

            <Sidebar />

            <BlogsContainer />

        </section>
    );
};

export default Home;