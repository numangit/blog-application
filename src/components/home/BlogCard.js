import React from 'react';

const BlogCard = ({ blog }) => {
    const { tags, likes, createdAt, title, image, isSaved } = blog;
    return (
        <div className="lws-card">
            <a href="post.html">
                <img src={image} className="lws-card-image" alt="" />
            </a>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
                </div>
                <a href="post.html" className="lws-postTitle">{title}</a>
                <div className="lws-tags">
                    {
                        tags.map((tag, i) => <span key={i} >#{tag}</span>)
                    }
                </div>

                {
                    isSaved &&
                    <div className="flex gap-2 mt-4">
                        <span className="lws-badge"> Saved </span>
                    </div>
                }
            </div>
        </div>
    );
};

export default BlogCard;