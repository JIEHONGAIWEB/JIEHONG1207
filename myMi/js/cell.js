/**
 * 定义一个产品每一个小盒子的类
 * 盒子属性
 * 盒子的方法
 * 盒子的返回值
 */
define(function(require,exports,module){
	let jq = require('jquery-1.8.3.min.js');	
	class cell_Product{
         /**
         *  
         * 面向对象的实现，单例模式的每一个盒子的实现
         * 导航栏的属性：宽高,上边框,图片的展示,介绍的标题信息,介绍的详细信息,
         * 以前的价格,现在的价格,享受的活动
         */

        constructor(obj){
            let defalutObj = {
                "width":234,
                "height":300,
                "marginLeft":20,
                "top":0,
                "left":0,
                "background":"pink",
                "borderTop":"1px solid red",
                "infoImg":"img/1.png",
                "introTitle":"introTitle",
                "introInfo":"introInfo",
                "pricePre ":123,
                "priceNow ":100,
                "activeTag" : ""
            };
            for(let key in obj){
                defalutObj[key] = obj[key];
            }
            for(let key in defalutObj){
                this[key] = defalutObj[key];
            }
            
        }
 }
    cell_Product.prototype.createUI = function(){
    /**
     * 方法的实现:初始化我的盒子的样式
     * @return {[type]} [description]
     */
    
    	//	大盒子的样式
        let $myDom = $("<div></div>");
        $myDom.appendTo(this.parentDom);
        $myDom.css({
            "width":this.width,
            "height":this.height,
            "background":this.background,
            "position":"absolute",
            "left":this.left,
            "top":this.top,
            "marginLeft":this.marginLeft,
            "borderTop":this.borderTop
            
            
        });
        //这就是父元素的一系列操作
        $myDom.append("<img />").append("<h6></h6>").append("<p></p>").append("<span></span>").append("<span></span>");

        //盒子孩子的图片元素
        $myDom.children(1).attr("src","img/1.png");
        //盒子孩子的intro-title
        //盒子孩子的intro-info
        //盒子孩子的info-price
    }
	cell_Product.prototype.initEvent = function(){
	/**
	 * 方法的实现:初始化我的盒子的鼠标滑过显示的事件
	 * 效果实现：鼠标滑过的时候，出现盒子向上移动一点，然后出现盒子的阴影
	 * @return {[type]} [description]
	 */
	}












	exports.jq = jq;
});