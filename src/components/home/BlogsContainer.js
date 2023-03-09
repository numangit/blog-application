import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

const BlogsContainer = () => {
    const blogs = useSelector(state => state.blogs);
    console.log(blogs);

    return (
        <main className="post-container" id="lws-postContainer">
            <BlogCard />
        </main>
    );
};

export default BlogsContainer;