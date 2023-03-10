import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';
import RelatedBlogCard from './RelatedBlogCard';

const RelatedBlogContainer = ({ blogDetails }) => {
    const { tags, id } = blogDetails;
    const dispatch = useDispatch();
    const { relatedBlogs, isLoading, isError, error } = useSelector(state => state.relatedBlogs);

    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags, id }))
    }, [dispatch, tags, id]);

    let content;

    if (isLoading) content = <h1>Loading...</h1>;
    if (!isLoading && isError) content = <h1>{error}</h1>;
    if (!isLoading && !isError && !relatedBlogs?.length) content = <h1>No Results</h1>;
    if (!isLoading && !isError && relatedBlogs?.length)
        content = relatedBlogs.map(blog => <RelatedBlogCard key={blog.id} blog={blog} />);

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {content}
            </div>
        </aside>
    );
};

export default RelatedBlogContainer;