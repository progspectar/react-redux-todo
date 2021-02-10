import React from 'react';
import './search-panel.css';

const SearchPanel = ({ toDo, done }) => {
    return (
        <input type="text"
            className="form-control search-input"
            placeholder="Search Panel" />
    );
};

export default SearchPanel;