/**
 * 主要功能：
 * 实现网页动态的添加div标签
 */
define(function(require,exports,module){
	/**
	 * topBar顶部的信息
	 * @type {Array}
	 */
	//需要jquery的文件
	//
	let jq = require('common.js');

	//将动态的生成作为函数，进行调用
	function createUI(){
		let arrTopBar = ["小米商城","MIUI","loT","云服务","水滴","金融","有品","Select Region"];
		let arrTopBarHref = ["https://www.mi.com/index.html","http://www.miui.com/","https://iot.mi.com/index.html","https://i.mi.com/","https://shuidi.mi.com/","https://jr.mi.com/?from=micom","https://youpin.mi.com/","https://www.mi.com/index.html#J_modal-globalSites"];
		let  logIn = ["#","#","#"];
		let inform = ["登录","注册","消息通知"];
		//顶部导航栏的内容
		for(let i = 0 ; i < arrTopBar.length;i++ ){
		
			$(".topbar-nav").append("<a href = "+ arrTopBarHref[i] +"></a><span>|</span>");
		}
			$(".topbar-nav span:last-child").remove();

		for(let i = 0 ; i < arrTopBar.length;i++ ){
			// 注意问题，需要给指定的a元素来进行指定
			$(".topbar-nav a").eq(i).text( arrTopBar[i]  );
		}
		//顶部的登录
		for(let i = 0 ; i < logIn.length;i++ ){
		
			$(".topbar-info").append("<a href = "+ logIn[i] +"></a><span>|</span>");
		}
			$(".topbar-info span:last-child").remove();

		for(let i = 0 ; i < inform.length;i++ ){
			// 注意问题，需要给指定的a元素来进行指定
			$(".topbar-info a").eq(i).text( inform[i]);
		}
		/**
		 * 头部的信息
		 */
		let headerArr = ["小米手机","红米","笔记本","电视","盒子","新品","路由器","智能硬件","服务","社区"]; 
		
		for(let i = 0 ; i < headerArr.length;i++ ){
			$(".header-nav").append("<a></a>");
			$(".header-nav a").eq(i).text( headerArr[i]);
		}
		/**
		 * home的信息
		 * 轮播图
		 * 产品
		 */
		
		/**
		 * 页面的主要内容
		 * 其中分为9大部分的内容
		 */
		 //9个部分的标题的处理
		 let titleArr = ["小米明星单品","家电","智能","搭配","配件","周边","为你推荐","热评产品","内容","视频"]; 
		//循环添加了标题
		//明星单品
			$(".page-main div").eq(0).append("<header></header>");
			$(".page-main header").eq(0).text( titleArr[0]);
			
		//为你推荐
		for(let i = 1 ; i < 7 ;i++ ){
			$(".page-main div").eq(i).append("<header></header>");
			$(".page-main header").eq(i).text( titleArr[i]);
		}
		
		//热评产品
			$(".page-main div").eq(7).append("<header></header>");
			$(".page-main header").eq(7).text( titleArr[7]);
		//内容
			$(".page-main div").eq(8).append("<header></header>");
			$(".page-main header").eq(8).text( titleArr[8]);
		//视频
			$(".page-main div").eq(9).append("<header></header>");
			$(".page-main header").eq(9).text( titleArr[9]);
		//循环的添加了产品的详细区域
		for(let i = 0; i < titleArr.length;i++ ){
			let $headers = $(".page-main header").eq(i).after("<div></div>");
			$headers.siblings().attr('class','allProducts');
			$(".allProducts").eq(i).append("<div></div><div></div>")
			$(".allProducts").eq(i).children().eq(0).attr("class","left");
			$(".allProducts").eq(i).children().eq(1).attr("class","right");
		}
		
		


		/**
		 * 页面底部的内容
		 */						
	}

	exports.UI = createUI;
	
	
	

	
});