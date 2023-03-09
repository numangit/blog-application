import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogDetails from '../components/Blog/BlogDetails';
import GoHome from '../components/Blog/GoHome';
import RelatedBlogContainer from '../components/Blog/RelatedBlogContainer';
import { fetchBlogDetails } from '../features/blogDetails/blogDetailsSlice';

const Blog = () => {
    const { blogId } = useParams();
    const dispatch = useDispatch();
    const { blogDetails } = useSelector(state => state.blogDetails);
    console.log(blogDetails);

    useEffect(() => {
        dispatch(fetchBlogDetails(blogId));
    }, [dispatch, blogId]);

    return (
        <div>
            <GoHome />
            <section className="post-page-container">

                <BlogDetails blogDetails={blogDetails} />

                <RelatedBlogContainer blogDetails={blogDetails} />

            </section>
        </div>
    );
};

export default Blog;