import React, { Component } from 'react';

export default class Path extends Component {

  componentDidMount(){
    this.showCvs();
  }
  showCvs = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
  }
  render(){
    return(
      <div>
        <canvas id='canvas' style={{border:'1px solid grey'}}></canvas>
      </div>
    )
  }
}