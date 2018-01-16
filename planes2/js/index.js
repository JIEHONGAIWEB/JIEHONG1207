/*
1、需要好好的考虑好有几个类，
分别都有什么属性和方法

2、
继承类有什么属性
还有什么方法
 */
function $(dom){
	return document.getElementById(dom);
}
function $create(dom){
	return document.createElement(dom);

}
//----------------------------------------------------------------
/*
首先写下我自己的思路：飞机这类的移动的物体都有什么样的属性呢？
1：
宽、高、left\right、增加的步长，还有方向，间隔的时间，定时器
方法都有什么呢？

新增节点（新增子弹，战机）
移动（）
消失节点（子弹的消失，敌方战机的消失）
边界的判断（敌方战机，我方战机，子弹）
--------------------继承的子类的内容------------------------------
1、敌方战机
属性：血值，并且有所在的战场

2、我方战机
属性：
行为：跟随鼠标移动


3、子弹
属性：能量值，
行为：发射子弹
	让子弹消失并且敌机的消失（数据的消失和界面的消失）
4、地图
属性：
 */
//--------------------------------------------------
//----------地图
/*function  Map(obj) {
	if(arguments.length >0){
		this.width = width;
	     this.height = height;
	     this.bgImg = bgImg;
		 this.obj = obj;	
	}
	//这个数组是指在我这个战场上的所有的敌方战机的总数
	this.enemyPlanes = [];
}
*/
//移动的物体
function  Common(obj) {
 if(arguments.length>0){

 	this.objDom = obj.objDom11;
	this.imgFile = obj.imgFile;
	this.width = obj.width;
	this.height = obj.height;
	this.left = obj.left;
	this.top = obj.top;
	this.myTimer = null;
	this.imgObj = null;
	// this.timeSpace = timeSpace;
	// this.increateLeft = increateLeft;
	// this.increateTop = increateTop;
	// this.directionLeft = directionLeft;
	// this.directionTop = directionTop;
 }
	


}
//进行移动的实现
/*Common.prototype.go = function(){

};*/
//新增节点在界面中进行显示
Common.prototype.createUI = function (){
	
	 let Dom = $create("img");//先把Dom节点的样式设置好
	 Dom.src = this.imgFile;
	 Dom.style.width = this.width +"px";
	 Dom.style.height = this.height + "px";
	 Dom.style.position = "absolute";
	 Dom.style.top = this.top + "px";
	 Dom.style.left = this.left + "px";
	this.objDom.appendChild(Dom);
	this.imgObj = Dom;
};
/*//消失节点在页面中删除
Common.prototype.disappearDom = function (){
	
};
//边界的判断
Common.prototype.edge = function (){
	
};
//--------------------------------------------------
//----------敌方战机
function  enemyPlane(obj) {

	

}

*/
//--------------------------------------------------
//----------我方战机
function  myPlane(obj,hp) {
	Common.call(this,obj);
	this.hp = hp;
	this.bullets = []; 
}
//首先继承父类
myPlane.prototype = new Common();
//跟随鼠标移动
myPlane.prototype.moveMouse = function (){
	this.objDom.onmousemove = (event)=>{//父节点的区域

		let evt = event || window.event;

		this.left = evt.pageX - this.objDom.offsetLeft - this.width/2;
		this.top = evt.pageY - this.objDom.offsetTop - this.height/2;


		

		 this.imgObj.style.left = this.left +"px";//新建img的left
		 this.imgObj.style.top = this.top +"px";

	}
}
/*
//子弹的发射
Common.prototype.shoot = function(){

};
//子弹是否碰撞、
//重点是碰撞的实现
Common.prototype.isCrash = function(){

};
 
//--------------------------------------------------
//----------子弹
function  bullet(obj) {
	this.power = power;//能量值
}
*/
//二、逻辑的实现
window.onload = function (){
	// let m = new Map();
	//新增加的我方战机，进行显示

	let myP = new myPlane({
		objDom11: $("planeGame"),
		width:98,
		height : 122,
		imgFile:"img/me.png",
		left : ($("planeGame").offsetWidth-98)/2,
		top : $("planeGame").offsetHeight-122
	},100);
	myP.createUI();	
	myP.moveMouse();	
}





