import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../features/relatedBlogs/relatedBlogsSlice';
import RelatedBlogCard from './RelatedBlogCard';

const RelatedBlogContainer = ({ blogDetails }) => {
    const { tags, id } = blogDetails;
    const dispatch = useDispatch();
    const { relatedBlogs } = useSelector(state => state.relatedBlogs);
    // console.log(relatedBlogs);

    useEffect(() => {
        dispatch(fetchRelatedBlogs({ tags, id }))
    }, [dispatch, tags, id]);

    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                {
                    relatedBlogs.map(blog => <RelatedBlogCard key={blog.id} blog={blog} />)
                }
            </div>
        </aside>
    );
};

export default RelatedBlogContainer;