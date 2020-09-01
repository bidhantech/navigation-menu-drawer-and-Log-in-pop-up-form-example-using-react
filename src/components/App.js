import React from 'react';
import Hero from './Hero';
import '../App.css';

class App extends React.Component{
  data={
    title: "Welcome to Website",
    heading: "A Freelance Web Developer"
  }

  render(){
    return (
      <div className="Website">
        <Hero data={this.data}/>
      </div>
    )
  }

}

export default App;