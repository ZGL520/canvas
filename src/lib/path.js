import React, { Component } from 'react';

export default class Path extends Component {

  componentDidMount(){
    // this.showTriangle();
    this.showTriangleFill();
    // this.showArc()
    // this.showQuadraticCurveTo()
  }
  showTriangle = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 10);
    ctx.lineTo(30, 30);
    ctx.closePath();
    ctx.strokeStyle = 'red';
    ctx.stroke();
  }
  showTriangleFill = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 10);
    ctx.lineTo(30, 30);
    ctx.closePath();
    ctx.fillStyle='yellow';
    ctx.fill();
  }
  showArc = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 75, 50, Math.PI, Math.PI*2, true);
    ctx.stroke();
    ctx.moveTo(200,75);
    ctx.arc(200, 75, 40, 0, Math.PI*2, true);
    ctx.stroke();
  }
  showQuadraticCurveTo = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.quadraticCurveTo(25,100,50,120);
    ctx.stroke();
  }
  render(){
    return(
      <div>
        <canvas id='canvas' style={{border:'1px solid grey'}}></canvas>
      </div>
    )
  }
}