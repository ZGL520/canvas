import React, { Component } from 'react';

export default class Path extends Component {

  componentDidMount(){
    // this.showTriangle();
    // this.showTriangleFill(); 
    // this.showArcOpen();
    // this.showArcClose();
    // this.showQuadraticCurveTo();
    this.showQuadraticCurveToClose();
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
    console.log(ctx)
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 10);
    ctx.lineTo(30, 30);
    ctx.closePath();
    ctx.fillStyle='yellow';
    ctx.fill();
  }
  showArcOpen = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(100, 75, 50, Math.PI*.5, Math.PI*1.5, true);
    ctx.stroke();
  }
  showArcClose = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.arc(160, 75, 40, 0, Math.PI*2, false);
    ctx.closePath();
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
  showQuadraticCurveToClose = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(150, 50);
    ctx.quadraticCurveTo(100,100,150,120);
    ctx.moveTo(150, 50);
    ctx.quadraticCurveTo(200,80,150,120);
    ctx.moveTo(150, 50);
    ctx.lineTo(150, 120);
    ctx.moveTo(150, 70);
    ctx.lineTo(160, 62);
    ctx.moveTo(150, 90);
    ctx.lineTo(160, 83);
    ctx.moveTo(150, 110);
    ctx.lineTo(160, 103);
    ctx.moveTo(150, 80);
    ctx.lineTo(140, 70);
    ctx.moveTo(150, 100);
    ctx.lineTo(140, 90);
    ctx.moveTo(150, 120);
    ctx.lineTo(140, 110);
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