import React from 'react';
import Sidebar from '../components/home/Sidebar';

const Home = () => {
    return (
        <section class="wrapper">
            <Sidebar />
            {/* <!-- posts container  --> */}
            <main class="post-container" id="lws-postContainer">
                {/* <!-- single post --> */}
                <div class="lws-card">
                    <a href="post.html">
                        <img src="./images/git.webp" class="lws-card-image" alt="" />
                    </a>
                    <div class="p-4">
                        <div class="lws-card-header">
                            <p class="lws-publishedDate">2023-05-01</p>
                            <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>100</p>
                        </div>
                        <a href="post.html" class="lws-postTitle"> Top Github Alternatives </a>
                        <div class="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
                        {/* <!-- Show this element if post is saved --> */}
                        <div class="flex gap-2 mt-4">
                            <span class="lws-badge"> Saved </span>
                        </div>
                        {/* <!-- Show this element if post is saved Ends --> */}
                    </div>
                </div>
                {/* <!-- Single Post Ends --> */}

                {/* <!-- single post --> */}
                <div class="lws-card">
                    <a href="post.html">
                        <img src="./images/git.webp" class="lws-card-image" alt="Top Github Alternatives" />
                    </a>
                    <div class="p-4">
                        <div class="lws-card-header">
                            <p class="lws-publishedDate">2023-05-01</p>
                            <p class="lws-likeCount"><i class="fa-regular fa-thumbs-up"></i>100</p>
                        </div>
                        <a href="post.html" class="lws-postTitle"> Top Github Alternatives </a>
                        <div class="lws-tags"><span>#python,</span> <span>#tech,</span> <span>#git</span></div>
                        {/* <!-- Show this element if post is saved --> */}
                        <div class="flex gap-2 mt-4">
                            <span class="lws-badge"> Saved </span>
                        </div>
                        {/* <!-- Show this element if post is saved Ends --> */}
                    </div>
                </div>
                {/* <!-- Single Post Ends --> */}

            </main>
            {/* <!-- posts container ends --> */}
        </section>
    );
};

export default Home;