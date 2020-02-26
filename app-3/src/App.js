import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      filterString: "",
      food: ['pizza', 'taco', 'burger', 'soup', 'ice cream']
    }
  }

  handleChange(filter) {
    this.setState({filterString: filter})
  }

  render(){
    let foodToDisplay = this.state.food.filter((element, index) => {
      return element.includes(this.state.filterString)
    })
    .map((element, index) => {
    return <h2 key={index}>{element}</h2>
    })
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type ="text" />
        {foodToDisplay}
    </div>
  );
}
}

export default App;
