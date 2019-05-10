import * as React from 'react'
import PizzaList from './PizzaList'
import { connect } from 'react-redux'

class PizzaListContainer extends React.Component {
  
    
    //** */function for changes through props
  selectPizza = (id) => {
    this.props.dispatch({
      type: 'SELECT_PIZZA',
      payload: id
    })
  }
    
  

  render() {
    return (
        <PizzaList pizzas={this.props.pizzas} selectPizza={this.selectPizza} />   
        //** changes through props */
    );
  }
}



const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas,
    selectedPizza: state.selectPizza
  }
}



export default connect(mapStateToProps)(PizzaListContainer)