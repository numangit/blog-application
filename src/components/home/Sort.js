import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarSort } from '../../features/sort&filter/sort&filterSlice';

const Sort = () => {
    const sortValue = useSelector(state => state.sidebar.sort);
    const [select, setSelect] = useState(sortValue);
    const dispatch = useDispatch();
    // console.log("out", select);

    //function to handle sort
    const sortHandler = (e) => {
        setSelect(e.target.value);
        // console.log("inside", select);
        dispatch(sidebarSort(e.target.value));
    };

    return (
        <div className="sidebar-content">
            <h4>Sort</h4>
            <select
                name="sort"
                id="lws-sort"
                className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
                value={select}
                onChange={sortHandler}>
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
            </select>
        </div>
    );
};

export default Sort;