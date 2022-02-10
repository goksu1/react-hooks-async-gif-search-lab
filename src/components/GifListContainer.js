import React, { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

export default function GifListContainer() {
    const [search, setSearch] = useState("")
    const [srcs, setSrcs] = useState({ src1: null, src2: null, src3: null })

    const searchFetch = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC&rating=g')
            .then((res) =>
                res.json())
            .then((data) => {
                if (data.data.length > 3)
                    setSrcs({
                        src1: data.data[0].images.original.url,
                        src2: data.data[1].images.original.url,
                        src3: data.data[2].images.original.url
                    })
                console.log(data.data)
            });
    }
    return (
        <div>
            <GifList {...srcs} />
            <GifSearch search={search} setSearch={setSearch} fetch={searchFetch} />
        </div>
    )
}