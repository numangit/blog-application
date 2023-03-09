import React from 'react';
import { Link } from 'react-router-dom';

const RelatedBlogCard = ({ blog }) => {
    return (
        <div className="card">
            <Link to={`/blogs/${blog.id}`}>
                <img src={blog.image} className="card-image" alt="" />
            </Link>
            <div className="p-4">
                <Link to={`/blogs/${blog.id}`} className="text-lg post-title lws-RelatedPostTitle">
                    {blog.title}
                </Link>
                <div className="mb-0 tags">
                    {
                        blog?.tags && blog.tags.map((tag, i) => <span key={i} >#{tag} </span>)
                    }
                </div>
                <p>{blog.createdAt}</p>
            </div>
        </div>
    );
};

export default RelatedBlogCard;