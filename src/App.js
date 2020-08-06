import React, { useState, useEffect } from "react";
import Interval from "./interval"


class App extends React.Component {
  state = {
    Person: {
      fullName: "Mohamed Ali Bouzaiene",
      bio: "a motivated student",
      imgSrc: "/me.jpg",
      profession: "student"
    },
    show: false
  };

  toggle = () => {
    this.setState({ show: !this.state.show })
  }


  render() {
    return ([
      <div style={{textAlign:'center'}}>
      <button style={{textAlign:'center'}} onClick={this.toggle}>show</button>
      </div>,
      this.state.show ? ( 
        <div style={{ textAlign:"center" }}>
          <br /><img src="/me.jpg" style={{width:300}}/>
          <h1>{this.state.Person.fullName}</h1>
          <h2>{this.state.Person.bio}</h2>
          <h3>{this.state.Person.profession}</h3>
          <Interval/>
        </div>
      ) : null
    ])

  }
}
export default App;
