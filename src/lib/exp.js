import React, { Component } from 'react';

export default class Exp extends Component {

  componentDidMount(){
    this.showCvs();
  }
  showCvs = () => {
    const imgUrl = 'https://github.com/ZGL520/MyImages/blob/master/imgone.jpeg?raw=true'
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    const img = new Image();
    img.src = imgUrl;
    img.onload = function(e){
        ctx.drawImage(img,20,30,100,100)
    }
  }
  render(){
    return(
      <div>
        <canvas id='canvas' style={{border:'1px solid grey'}}></canvas>
      </div>
    )
  }
}