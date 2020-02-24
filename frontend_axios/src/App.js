import React, { Component } from 'react';
import './App.css';
import PersonContainer from './components/PersonContainer'
import { getPeopleFetch,
        deletePersonFetch,
        createPersonFetch } from './utils'

class App extends Component {
  state = {
    people: [],
    error: true
  }



  componentDidMount(){

    // change this from fetch to axios, and make this method async
    // do not forget to set error to false when you setState

    getPeopleFetch()
    .then(data => {
      this.setState({
        people: data,
        error: false
      })
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
