import React, { Component } from 'react'

class AddFood extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
    }

    handleInput = (e) => {
        let {name, value} =e.target;

        this.setState({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newFood = this.state
        this.props.createFood(newFood)

        this.setState({
            name: '',
            calories: '',
            image:''
        })
    }

    render() {
        return (
            <div>
            
               <form onSubmit={this.handleSubmit}>
                   <label>Name:</label>
                   <input type="text" name='name' value= {this.state.name} onChange = {this.handleInput}/>
                    <br/>
                   <label>Calories:</label>
                   <input type="text" name='calories' value={this.state.calories} onChange = {this.handleInput}/>
                   <br/>
                   <label>Image:</label>
                   <input type="text" name='image' value={this.state.image} onChange = {this.handleInput} />
                   <br/>
                   <button type="submit">Add Food</button>
               </form> 

            </div>
        )
    }
}

export default AddFood
