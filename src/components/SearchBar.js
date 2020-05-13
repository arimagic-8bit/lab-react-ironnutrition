import React, { Component } from 'react'

class SearchBar extends Component {
    
    state = {
        searchbar: ''
    }

    searchThis = (e) => {
        let value = e.target.value
        
        this.setState({searchbar:value}, () => {this.props.searchFood(value)})

        console.log(
            value ,this.state.searchbar, this.props)
    }

  
    render() {


        return (
                <div >
                    <input  onChange={this.searchThis} value={this.state.searchbar} type="text" placeholder="Find some food"/>
                </div>
        )
    }
}

export default SearchBar
