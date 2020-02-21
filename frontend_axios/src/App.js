import React, { Component } from 'react';
import './App.css';
import PersonContainer from './components/PersonContainer'
// import { getPeopleAxios, getPeopleFetch } from './utils'
const axios = require('axios');
// const url = 'https://historical-figures.herokuapp.com/'
const url = 'http://localhost:3000'

class App extends Component {
  state = {
    people: [],
    error: true
  }

  componentDidMount(){
    axios(`${url}/people`)
      .then(response => {
        if(response.status === 200 || response){
          this.setState({
            people: response.data,
            error: false
          })
        } else {
          this.setState({
            error: true

          })
        }
      })

  }
  render(){

    return (
      <div className="App">
        { this.state.error
        ?
        <>
        <p id='line'> Something went wrong </p>
        <img id='meme' src='https://i.kym-cdn.com/photos/images/original/000/768/910/412.png' alt='meme'/>
        </>
        :
        <PersonContainer people={this.state.people}/>
        }
      </div>
    );
  }
}

export default App;
