import React from 'react';
import Filter from './Filter';
import Sort from './Sort';

const Sidebar = () => {
    return (
        <aside>
            <div class="sidebar-items">
                <Sort />
                {/* <div class="sidebar-content">
                    <h4>Sort</h4>
                    <select name="sort" id="lws-sort" class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                        <option value="">Default</option>
                        <option value="newest">Newest</option>
                        <option value="most_liked">Most Liked</option>
                    </select>
                </div> */}
                <Filter />
                {/* <div class="sidebar-content">
                    <h4>Filter</h4>
                    <div class="radio-group">
                        <div>
                            <input type="radio" name="filter" id="lws-all" checked class="radio" />
                            <label for="lws-all">All</label>
                        </div>
                        <div>
                            <input type="radio" name="filter" id="lws-saved" class="radio" />
                            <label for="lws-saved">Saved</label>
                        </div>
                    </div>
                </div> */}
            </div>
        </aside>
    );
};

export default Sidebar;