import React from 'react';
import BlogDetails from '../components/Blog/BlogDetails';
import GoHome from '../components/Blog/GoHome';
import RelatedVideosContainer from '../components/Blog/RelatedVideosContainer';

const Blog = () => {
    return (
        <div>
            <GoHome />
            <section class="post-page-container">

                <BlogDetails />


                <RelatedVideosContainer />

            </section>
        </div>
    );
};

export default Blog;