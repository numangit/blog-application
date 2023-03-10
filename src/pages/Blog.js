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
    const { blogDetails, isLoading, isError, error } = useSelector(state => state.blogDetails);

    useEffect(() => {
        dispatch(fetchBlogDetails(blogId));
    }, [dispatch, blogId]);

    let content;

    if (isLoading) content = <h1>Loading...</h1>;
    if (!isLoading && isError) content = <h1>{error}</h1>;
    if (!isLoading && !isError && Object.keys(blogDetails)?.length === 0)
        content = <h1>No Results</h1>;
    if (!isLoading && !isError && blogDetails?.id)
        content = <BlogDetails blogDetails={blogDetails} />;

    return (
        <div>
            <GoHome />
            <section className="post-page-container">
                {content}

                <RelatedBlogContainer blogDetails={blogDetails} />

            </section>
        </div>
    );
};

export default Blog;