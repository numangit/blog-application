import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

const BlogsContainer = () => {
    const blogs = useSelector(state => state.blogs.blogs);

    return (
        <main className="post-container" id="lws-postContainer">
            {
                blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            }
        </main>
    );
};

export default BlogsContainer;