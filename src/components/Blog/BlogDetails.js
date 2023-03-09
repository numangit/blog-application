import React from 'react';
import { useSelector } from 'react-redux';

const BlogDetails = () => {
    const blogDetails = useSelector(state => state.blogDetails.blogDetails);
    console.log(blogDetails);

    return (
        <main className="post">
            <img src={blogDetails.image} alt="githum" className="w-full rounded-md" id="lws-megaThumb" />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {blogDetails.title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    <span>#python,</span> <span>#tech,</span> <span>#git</span>
                </div>
                <div className="btn-group">
                    {/* <!-- handle like on button click --> */}
                    <button className="like-btn" id="lws-singleLinks">
                        <i className="fa-regular fa-thumbs-up"></i>  {blogDetails.likes}
                    </button>

                    <button className={`${blogDetails.isSaved && "active"} save-btn`} id="lws-singleSavedBtn">
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