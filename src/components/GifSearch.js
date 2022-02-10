import React from 'react'

export default function GifSearch({ search, setSearch, fetch }) {
    function handleSearch(e) {
        setSearch(e.target.value)
    }
    return (
        <div>
            Enter search item:
            <input type="text" value={search} onChange={handleSearch} />
            <button onClick={fetch} >Get GIF</button>
        </div>
    )
}