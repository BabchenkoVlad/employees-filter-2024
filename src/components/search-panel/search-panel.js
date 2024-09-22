import { useState } from 'react';

import './search-panel.css';

const SearchPanel = ({onUpdeteSearch}) => {
    const [search, setSearch] = useState('');

    const searchString = (e) => {
        const term = e.target.value;
        setSearch(term);
        onUpdeteSearch(term);
    }

    return (
        <input 
            type="text"
            className="form-control search-input"
            placeholder="Найти сотрудника"
            onChange={searchString}
            value={search}
        />
    )
}

export default SearchPanel;