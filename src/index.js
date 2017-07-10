import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// Using App from containers rather than components because a container is a 'smart' React component that's hooked directly into the store
// Components are "dumb" React containers that are unaware of Redux


// Creates the store
const store = configureStore()

// Wrap App container in Redux Provider to connect React to Redux store
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)



// NON-REDUX INDEX.JS
// import React from 'react'
// import ReactDOM from 'react-dom'
// import GifList from './components/GifList'
// import GifModal from './components/GifModal'
// import SearchBar from './components/SearchBar'
// import request from 'superagent'
// import './styles/app.css'
//
// class App extends React.Component {
//   constructor () {
//     super()
//
//     this.state = {
//       gifs: [],
//       selectedGif: null,
//       modalIsOpen: false
//     }
//   }
//
//   openModal = (gif) => {
//       this.setState({
//           modalIsOpen: true,
//           selectedGif: gif
//       })
//   }
//
//   closeModal = () => {
//       this.setState({
//           modalIsOpen: false,
//           selectedGif: null
//       })
//   }
//
//   handleTermChange = (term) => {
//     console.log(term)
//
//     const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`
//
//     request.get(url, (err, res) => {
//       this.setState({gifs: res.body.data})
//     })
//   }
//
//   render () {
//     return (
//       <div>
//         <SearchBar onTermChange={term => this.handleTermChange(term)} />
//         <GifList gifs={this.state.gifs}
//                  onGifSelect={selectedGif => this.openModal(selectedGif)}/>
//         <GifModal modalIsOpen={this.state.modalIsOpen}
//                   selectedGif={this.state.selectedGif}
//                   onRequestClose={ () => this.closeModal() } />
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('app'))
