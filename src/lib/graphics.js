import React, { Component } from 'react';

export default class Graphics extends Component {

  componentDidMount(){
    // this.drawFill()
    this.drawStroke();
    // this.drawClear()
  }
  drawFill = () => { //绘制填充矩形
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.fillStyle = 'red'
    ctx.fillRect(20, 20, 100, 100);
  }

  drawStroke = () => { //绘制边框矩形
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.strokeStyle = 'red';
    ctx.strokeRect(20, 150, 100, 100);
  }

  drawClear = () => { //清除指定区域
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.fillRect(150, 20, 100, 100);
    ctx.fillRect(150, 150, 100, 100);
    ctx.clearRect(160, 50, 50, 50);
    ctx.clearRect(220, 170, 50, 50)
  }

  render(){
    return(
      <div>
        <canvas id='canvas' width='300px' height='300px' style={{
          border:'1px solid grey', 
          backgroundColor: 'yellowgreen',
        }}></canvas>
      </div>
    )
  }
}