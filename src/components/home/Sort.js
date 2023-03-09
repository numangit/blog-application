import React from 'react';
import { useDispatch } from 'react-redux';
import { sidebarSort } from '../../features/sort&filter/sort&filterSlice';

const Sort = () => {
    const dispatch = useDispatch();

    //function to handle sort
    const sortHandler = (e) => {
        dispatch(sidebarSort(e.target.value));
    };

    return (
        <div className="sidebar-content">
            <h4>Sort</h4>
            <select
                name="sort"
                id="lws-sort"
                className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
                onChange={sortHandler}>
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
            </select>
        </div>
    );
};

export default Sort;