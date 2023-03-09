import React from 'react';

const RelatedVideoCard = () => {
    return (
        <div class="card">
            <a href="post.html">
                <img src="./images/ai.jpg" class="card-image" alt="" />
            </a>
            <div class="p-4">
                <a href="post.html" class="text-lg post-title lws-RelatedPostTitle">
                    The future of Artificial Inteligence
                </a>
                <div class="mb-0 tags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <p>2020-07-15</p>
            </div>
        </div>
    );
};

export default RelatedVideoCard;