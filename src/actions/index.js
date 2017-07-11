import request from 'superagent'
// Can't use setState on superagent's result anymore.

// action type
export const REQUEST_GIFS = 'REQUEST_GIFS'

const API_URL = 'http://api.giphy.com/v1/gifs/search?q='
const API_KEY = '&api_key=dc6zaTOxFJmzC'

// action creator
export function requestGifs(term = null) {
    console.log(term);
    const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}&limit=10`);
    // the action
    return {
        type: REQUEST_GIFS,
        payload: data
    }
}
