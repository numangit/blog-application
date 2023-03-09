import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

const BlogsContainer = () => {
    const blogs = useSelector(state => state.blogs.blogs);
    const filterData = useSelector(state => state.sidebar);

    const filterBlogs = (blog) => {
        const { filter } = filterData;
        if (filter === "saved") {
            return blog.isSaved;
        } else {
            return true;
        }
    };

    const sortBlogs = (a, b) => {
        const { sort } = filterData;
        if (sort === "newest") {
            return parseInt(new Date(b.createdAt)) - parseInt(new Date(a.createdAt))
        } else if (sort === "most_liked") {
            return b.likes - a.likes
        }
        else {
            return true;
        }
    };

    return (
        <main className="post-container" id="lws-postContainer">
            {
                blogs.filter(filterBlogs).sort(sortBlogs).map((blog) => <BlogCard key={blog.id} blog={blog} />)
            }
        </main>
    );
};

export default BlogsContainer;