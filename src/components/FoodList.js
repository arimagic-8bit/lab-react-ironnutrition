import React, { Component } from 'react'
import foods from './../foods.json';
import FoodBox from './FoodBox' 
import AddFood from './AddFood'
import SearchBar from './SearchBar'

class FoodList extends Component {
    state = {
        food: foods,
        showFoods: true
    }
    
    toogleFormFood = () => {
        this.setState({showFoods: !this.state.showFoods})
    }

    createFood = (newFoodObj) => {
        const foodCopy = [...this.state.food]
        foodCopy.unshift(newFoodObj)

        this.setState({food:foodCopy})
    }

    searchFood = (foodToSearch) => {
        let foodCopy = [...foods].filter((food) => {
         return food.name.toLowerCase().includes(foodToSearch.toLowerCase())
        })
        
        this.setState({food:foodCopy})
    }
       

    render() {
        return (
            <div>

            <h1>IronFoods</h1>

            <br/>
                <SearchBar searchFood = {this.searchFood} />
            
            <br/>

            <button onClick = {this.toogleFormFood}>Add new food</button>

           
                {
                    this.state.showFoods
                    ? <AddFood createFood={this.createFood}/> 
                    :null                   
                }
            
            <div className = "columns">
                <div className="column">
                    {this.state.food.map((foodObj) => {
                        return(
                        <FoodBox 
                        key={foodObj.name}
                        {...foodObj}
                        />
                        )
                    })}
                </div>
                <div className="column">
                    <h2>Today's foods</h2>
                </div>
              
            </div>
               

            </div>
        )
    }
}

export default FoodList
