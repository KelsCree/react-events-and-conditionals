import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'

class App extends Component {

  state = {
    characters: []
  }

  handleClick = (event) => {
    fetch('https://rickandmortyapi.com/api/character') 
      .then(response => response.json())
      .then(data => this.setState({characters: data.results}))
  }

  showCharacters = () => this.state.characters.map(character => <Card key={character.id} character={character}/>)

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Fetch Characters</button>
        {this.showCharacters()}
      </div>
    );
  }
}

export default App;
