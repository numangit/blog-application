import React from 'react';

const RelatedBlogCard = () => {
    return (
        <div className="card">
            <a href="post.html">
                <img src="./images/ai.jpg" className="card-image" alt="" />
            </a>
            <div className="p-4">
                <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
                    The future of Artificial Inteligence
                </a>
                <div className="mb-0 tags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <p>2020-07-15</p>
            </div>
        </div>
    );
};

export default RelatedBlogCard;