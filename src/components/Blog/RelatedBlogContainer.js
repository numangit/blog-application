import React from 'react';
import RelatedBlogCard from './RelatedBlogCard';

const RelatedBlogContainer = () => {
    return (
        <aside>
            <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div className="space-y-4 related-post-container">
                <RelatedBlogCard />
            </div>
        </aside>
    );
};

export default RelatedBlogContainer;