import React from 'react';
import RelatedVideoCard from './RelatedVideoCard';

const RelatedVideosContainer = () => {
    return (
        <aside>
            <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
            <div class="space-y-4 related-post-container">
                <RelatedVideoCard />
            </div>
        </aside>
    );
};

export default RelatedVideosContainer;