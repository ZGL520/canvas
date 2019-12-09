先说明一下，我们所有的展示代码都在react项目中进行

----

在canvas中有一个关键的方法: getCentext,就是我们在例子里使用的这个方法，getCentext返回canvas的绘制上下文，有了这个上下文，我们就可以在canvas上为所欲为，疯狂输出......

该说正事了，图形绘制

----

canvas的图形绘制基本就是两种，一种是矩形，一种是路径

## 矩形

矩形绘制，在绘制矩形是需要关注3个方法，分别是fillRect，strokeRect，clearRect，这三个方法的参数依次都是x:左边距离、y:顶部距离、w:宽度、h:高度，但是他们的作用不同，活不多说，上菜···不是···上代码

创建一个宽300px，高300px的canvas节点，设置一个背景色便于观察效果
```html
 <div>
   <canvas id='canvas' width='300px' height='300px' style={{
    border:'1px solid grey', 
    backgroundColor: 'yellowgreen',
    }}></canvas>
  </div>
```

### fillRect方法

```javascript
  drawFill = () => { //绘制填充矩形
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.fillRect(20, 20, 100, 100);
  }
```

效果
![](https://user-gold-cdn.xitu.io/2019/12/4/16ed163b4371dae3?w=860&h=810&f=jpeg&s=10635)

drawFill方法获取canvas节点，再获取canvas上下文，最后使用fillRect方法绘制了一个位置距离左边20px、顶部20px的矩形，该矩形默认黑色填充,如果需要改变填充颜色需要用到另一个方法fillStyle，像下面这样会得到一个红色的矩形

```javasctipt
  drawFill = () => { //绘制填充矩形
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.fillStyle = 'red'
    ctx.fillRect(20, 20, 100, 100);
  }
 ```
 
 效果
 
 
![](https://user-gold-cdn.xitu.io/2019/12/4/16ed16445d046dfd?w=784&h=738&f=jpeg&s=10288)

### strokeRect方法

```javascript
  drawStroke = () => { //绘制边框矩形
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.strokeRect(20, 150, 100, 100);
  }
```

效果


![](https://user-gold-cdn.xitu.io/2019/12/4/16ed1686fe149f9d?w=790&h=762&f=jpeg&s=10729)

在drawStroke方法中，同样通过拿到canvas的节点和上下文，然后使用strokeRect方法绘制了一个位于左边20px、顶部150px，宽高100px的矩形，该矩形与fillRect绘制的矩形不同，strokeRect绘制的是带边框的无填充矩形.同样，如果你不喜欢这边框是黑色，想来点花样，像下面这样操作一下，聪明的你一定想象的到是个什么效果了

```javasctipt
  drawStroke = () => { //绘制边框矩形
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.strokeStyle = 'red';
    ctx.strokeRect(20, 150, 100, 100);
  }
```

### clearRect方法

```javasctipt
  drawClear = () => { //清除指定区域
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.fillRect(150, 20, 100, 100);
    ctx.fillRect(150, 150, 100, 100);
    ctx.clearRect(160, 50, 50, 50);
    ctx.clearRect(220, 170, 50, 50)
  }
```
效果

![](https://user-gold-cdn.xitu.io/2019/12/4/16ed174cfa6781ef?w=798&h=778&f=jpeg&s=13160)

在drawClear方法中，同样获取到canvas的节点和上下文，然后绘制两个填充矩形，clearRect开始表演了
```javascript
ctx.clearRect(160, 50, 50, 50);
```
上面操作在canvas的（160，50）位置挖了个50*50的洞，这个宽高50的区域是透明的

在第二个图形上，同样挖了一个50*50的区域

```javascript
ctx.clearRect(220, 170, 50, 50)
```
不过第二个矩形比较幸运的是只有一部分被clear了，另一部分挖在了没有被矩形覆盖的canvas画布上

## 2，路径基础画法
### 1，如何绘制一个图形
接着我们来聊一下通过路径的方式来绘制图形，在路径绘制的过程过程中有如下几个关键的方法

```javascript
beginPath(); //开始绘制一条路径
closePath(); //闭合一条路径
moveTo(); //将焦点移动到指定位置，可以理解为笔尖
lineTo(); //绘制一条道指定位置的线，可以理解为划线的过程
```

在上面的方法中包括了绘制路径的关键方法，整个绘制过程可以向下面这样的过程来理解

1，我们拿到一个画板，准备开始绘画，这个时候调用beginPath方法开始

2，我们需要将画笔笔尖移动到画板上的某一点A(x,y),这个动作调用moveTo方法

3，开始画画，调用lineTo方法，lineTo方法接受一个坐标参数B(x,y),这是绘制了一条从A到B的边

4,然后我们再调用lineTo继续将画笔划到C(x,y)点

5，再调用closePath方法闭合路径，这样我们就得到了一个由A，B，C三点组成的几个三角形

举个🌰

```javascript
  showTriangle = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 10);
    ctx.lineTo(30, 30);
    ctx.closePath();
    ctx.stroke()
  }
```

上面代码中的stroke方法我们暂时不说放在下面来说，在绘制中moveTo和lineTo两个方法都是接受两个参数（x,y），都可以理解为将画笔笔尖移动到目标坐标点，但是不同的是moveTo应该理解为将笔拿起来然后放到目标坐标点，而lineTo应该理解为将笔从源坐标点划到目标坐标点，所以lineTo方法会产生一条路径，这条路径在后面将是可视的

如图：

![]()

### 2，我想看到我画的图
在前面的介绍中我们知道了如何通过路径来绘制一个图形，下面来讲两个方法，这两个方法决定以怎样的方式来呈现我们绘制的图形
```javascript
stroke(); //绘制路径轮廓
fill(); //填充路径区域
```

这里我们还用上面举的🌰来说，我们先来这样画一个图，还是像上面那样
```javascript
  showTriangle = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 10);
    ctx.lineTo(30, 30);
    ctx.closePath();
  }
```
在这个方法中我们只是去掉了stroke方法，其他的步骤都一样，如下图我们将什么都看不见


这里其实我们的图形已经绘制完成，当一个图形绘制完成后还需要调用相应的方法来决定怎样呈现图形，shroke和fill分别表示使用描边和填充的方法，像前面例子提到的在绘制完成后调用了shroke方法，这样我们就看到的我们绘制的三角形，如果是调用fill方法，将会使用填充的方法呈现，举个🌰

```javasctipt
  showTriangleFill = () => {
    const e = document.getElementById('canvas');
    const ctx = e.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(50, 10);
    ctx.lineTo(30, 30);
    ctx.closePath();
    ctx.fill();
  }
```
效果如图

### 3，啥？ 颜色？ 要啥自行车

有没有发现我们上面绘制的图绘制出来都是黑白色的，是的，在前端的世界里，只有黑白，那是过不下去滴，所以我们要颜色，五颜六色的那种，由于这里我们主要说图形绘制，就简单介绍两个设置颜色的方法，这两个方法也是经常会用到的

```javascript
strokeStyle //设置轮廓颜色
fillStyle //设置填充颜色
```

相信聪明的你已经从名字上看出来它们的意思以及应该在哪里使用了，下面我们举两个例子来说明一下，还是以上面三角形的例子为基础，上代码

```javascript
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
```

如图在这里我们画了条红色边框的三角形，其实就多了一行代码，使用strokeStyle设置边框颜色，同样再来使用另一个看看是什么效果

```javascript
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
```


这次我们使用fillStyle设置颜色，画了一个黄色填充的三角形，就问你爽不爽，是不是开始想搞事情了，不急还有更爽的，看招


## 3，路径高级画法


## 4，总结