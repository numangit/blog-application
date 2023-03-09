import React from 'react';

const Home = () => {
    return (
        <section class="wrapper">
            <aside>
                <div class="sidebar-items">
                    <div class="sidebar-content">
                        <h4>Sort</h4>
                        <select name="sort" id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                            <option value="">Default</option>
                            <option value="newest">Newest</option>
                            <option value="most_liked">Most Liked</option>
                        </select>
                    </div>
                    <div class="sidebar-content">
                        <h4>Filter</h4>
                        <div class="radio-group">
                            {/* <!-- handle filter on button click --> */}
                            <div>
                                <input type="radio" name="filter" id="lws-all" checked class="radio" />
                                <label for="lws-all">All</label>
                            </div>
                            <div>
                                <input type="radio" name="filter" id="lws-saved" class="radio" />
                                <label for="lws-saved">Saved</label>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
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