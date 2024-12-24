import React, { useState } from 'react'

function SearchBox({ onSearch }) {

    const [searchValue, setSearchValue] = useState();

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        onSearch(value); // Pass the search value to the parent component
    };

    return (
        <div className=' w-[30rem] flex justify-center'>
            <input
                type='text'
                value={searchValue}
                onChange={handleSearchChange}
                className=' border rounded-md w-full pl-4 h-10 outline-none'
                placeholder='Enter Student Name or Skills'
            />
        </div>
    )
}

export default SearchBox