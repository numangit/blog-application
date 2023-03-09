import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogDetails from '../components/Blog/BlogDetails';
import GoHome from '../components/Blog/GoHome';
import RelatedVideosContainer from '../components/Blog/RelatedVideosContainer';
import { fetchBlogDetails } from '../features/blogDetails/blogDetailsSlice';

const Blog = () => {
    const { blogId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBlogDetails(blogId));
    }, [dispatch, blogId]);

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