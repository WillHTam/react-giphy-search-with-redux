import React from 'react'
import GifsTemp from '../components/GifsTemp'
// Import connect to give a way pull Redux's state into React as props
import { connect } from 'react-redux'

// Rendering GifsTemp and passing in gifs as props, but where does the gifs object come from? (see below)
class App extends React.Component {
    render() {
        return(
            <div>
                <GifsTemp gifs={ this.props.gif } />
            </div>
        )
    }

}

// This function is passed as first argument of 'connect' below
    // This allows App component to subscribe to Redux store updates; when the store changes, mapStateToProps is called
// mapStateToProps returns a plain object, which then becomes available on the App component as props
//(which can then be passed down to GifsTem as this.props.gif)
// Where do the gifs come from?
// The combineReducers function in 'reducers/index.js' set the result of GifsReducer in the state with the gifs key
function mapStateToProps(state) {
    return {
        gifs: state.gifs
    }
}

export default connect(mapStateToProps)(App)
