import React from 'react';
import { useSelector } from 'react-redux';
import BlogCard from './BlogCard';

const BlogsContainer = () => {
    const { blogs, isLoading, isError, error } = useSelector(state => state.blogs);
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
            return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
        } else if (sort === "most_liked") {
            return b.likes - a.likes
        }
        else {
            return true;
        }
    };

    let content;

    if (isLoading) content = <h1>Loading...</h1>;
    if (!isLoading && isError) content = <h1>{error}</h1>;
    if (!isLoading && !isError && !blogs.length)
        content = <h1>No Results</h1>;
    if (!isLoading && !isError && blogs.length)
        content = blogs.filter(filterBlogs).sort(sortBlogs).map((blog) => <BlogCard key={blog.id} blog={blog} />);

    return (
        <main className="post-container" id="lws-postContainer">
            {content}
        </main>
    );
};

export default BlogsContainer;