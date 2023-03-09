import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sidebarFilter } from '../../features/sort&filter/sort&filterSlice';

const Filter = () => {
    const filterValue = useSelector(state => state.sidebar.filter)
    const [select, setSelect] = useState(filterValue);
    const dispatch = useDispatch();

    //function to handle sort
    const sortHandler = (e) => {
        setSelect(e.target.value);
        dispatch(sidebarFilter(select));
    };

    return (
        <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
                {/* <!-- handle filter on button click --> */}
                <div >
                    <input
                        type="radio"
                        value='all'
                        name="filter"
                        id="lws-all"
                        className="radio"
                        onChange={(e) => sortHandler(e)}
                        checked />
                    <label htmlFor="lws-all">All</label>
                </div>
                <div >
                    <input
                        type="radio"
                        value='saved'
                        name="filter"
                        id="lws-saved"
                        onChange={sortHandler}
                        className="radio" />
                    <label htmlFor="lws-saved">Saved</label>
                </div>
            </div>
        </div>
    );
};

export default Filter;