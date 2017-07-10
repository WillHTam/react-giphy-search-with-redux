import React from 'react'

// The parameter ({gifs}) means that the function is expecting an object that has property gifs
// Instead of getting the object then accessing object.gifs, access it directly

const GifsTemp = ({ gifs }) => {
    const gifItems = gifs.map((gif) => {
        return(
            <li key={gif.id}>
                <img src={gif.url} alt=""/>
            </li>
        )
    })

    return (
        <ul className="gif-list">{gifItems}</ul>
    )
}

export default GifsTemp
