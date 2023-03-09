import React from 'react';
import BlogDetails from '../components/Blog/BlogDetails';
import GoHome from '../components/Blog/GoHome';
import RelatedVideosContainer from '../components/Blog/RelatedVideosContainer';

const Blog = () => {
    return (
        <div>
            <GoHome />
            <section className="post-page-container">

                <BlogDetails />


                <RelatedVideosContainer />

            </section>
        </div>
    );
};

export default Blog;