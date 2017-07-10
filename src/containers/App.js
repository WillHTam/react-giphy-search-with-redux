import React from 'react';
import GifsTemp from '../components/GifsTemp';
import { connect } from 'react-redux';
// import connect to link React and Redux, and to give a way to pull Redu'x state into React as props

// Where does the gifs object come from? Line17
class App extends React.Component {
  render() {
    return (
      <div>
        <GifsTemp gifs={ this.props.gifs } />
      </div>
    );
  }
}

// mapStateToProps will be the first argument for connect
// Connect lets the App component to subscribe to the Redux store update
    // Whenver the store changes, mapStateToProps is called
// mapStateToProps returns a plain object which becomes available to App as props
    // Which can then be passed down to GifsTemp as this.props.gifs
// Where do the gifs come from?
    // In combineReducers, set the result of GifsReducer to the state with 'gifs' key
    // Here in mapStateToProps, link 'gifs' from GifsReducer to this.props.gifs in App
function mapStateToProps(state) {
  return {
    gifs: state.gifs
  };
}

// Here we are not exporting App, but instead the results of connect
    // Wrapping <App /> with <Provider> in src/index.js made the Redux store available
    // to connect()() calls within child components. This is how mapStateToProps can access the state
// connect has two parentheses because it has two different function calls
    // connect(mapStateToProps) returns a function
    // then the second function is called immediately with App passed in as an argument
export default connect(mapStateToProps)(App);
