import React from 'react'

class SearchBar extends React.Component {
  constructor () {
    super()
    this.state = { term: '' }
  }
  // From whence 'onTermChange'? Since it was a prop set on it in App, it has been inherited for use and to pass data by this component.
  onInputChange (term) {
    this.setState({term})
    this.props.onTermChange(term)
  }

  render () {
    return (
      <div className='search'>
        <input placeholder="Enter text to search for gifs!" onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }
}

export default SearchBar
