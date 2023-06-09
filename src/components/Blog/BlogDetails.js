import React from 'react';
import { useDispatch } from 'react-redux';
import { likeBlog, likeCount, saveBlog, saveToggle } from '../../features/blogDetails/blogDetailsSlice';

const BlogDetails = ({ blogDetails }) => {
    const dispatch = useDispatch();

    const handleLike = (id, likes) => {
        dispatch(likeBlog({ id, likes }))
            .then(data => dispatch(likeCount(data.payload.id)))
    };

    const handleSaved = (id, isSaved) => {
        dispatch(saveBlog({ id, isSaved }))
            .then(data => dispatch(saveToggle(data.payload.id)))
    };

    return (
        <main className="post">
            <img src={blogDetails.image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {blogDetails.title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    {
                        blogDetails?.tags && (<span>{`#${blogDetails.tags.join(', #')}`}</span>)
                    }
                </div>

                <div className="btn-group">

                    <button onClick={() => handleLike(blogDetails.id, blogDetails.likes)} className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i>  {blogDetails.likes}
                    </button>

                    <button
                        onClick={() => handleSaved(blogDetails.id, blogDetails.isSaved)}
                        className={`${blogDetails.isSaved && "active"} save-btn`}
                        id="lws-singleSavedBtn">
                        <i className="fa-regular fa-bookmark"></i>
                        {blogDetails.isSaved ? "Saved" : "Save"}
                    </button>
                </div>

                <div className="mt-6">
                    <p>
                        {blogDetails.description}
                    </p>
                </div>
            </div>
        </main>
    );
};

export default BlogDetails;