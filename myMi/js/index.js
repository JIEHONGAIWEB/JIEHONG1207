

/**
 * 调用的主页面
 */
seajs.use("createDiv",function(create){
	create.UI();
	//将我的页面中引入需要的div数据
    /**
     * 调用循环的生成我需要的cell
     */
    //小米明星单品
        let arrSingleProTitle = ["小米MIX 2","红米5A","小米Note 3","小米电视4A 43英寸 标准版","小米笔记本","小米手环 2","小米净水器 厨下式","小米圈铁耳机Pro"];
        let arrSingleProIntroInfo = ["全面屏2.0，5.99 大屏","8天超长待机，137g轻巧机身","1600万美颜自拍，2倍变焦双摄","全高清HDR  四核高性能处理器","更轻更薄，像杂志一样随身携带","OLED 显示屏幕，升级计步算法","直出纯净水，隐藏式安装","独创双动圈+动铁，三单元发声"];
        let arrSingleProPriceNow = ["3299元起","599元","1999元起","1999元","3599元起","149元","1999元","149元"];



        for(let j = 0 ;j<4;j++){
           /*
            if(i == 1 && j ==3){
                break;
            }*/
            let $left = j*266;
            create.cell({
            "imgWidth":160,
            "imgHeight":160,
            "height":340,
            "background":"#f5f5f5",
            "parentDom":$(".allProducts").eq(0),
            "left":$left,
            "top":0,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    
     //家电
	for(let i =0;i<2;i++){
        let $top = i*320+20;

        for(let j = 0 ;j<4;j++){
           /*
            if(i == 1 && j ==3){
                break;
            }*/
            let $left = j*246;
            create.cell({

            "parentDom":$(".right").eq(0),
            "left":$left,
            "top":$top,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    }
    //智能
    for(let i =0;i<2;i++){
        let $top = i*320+20;

        for(let j = 0 ;j<4;j++){
           /*
            if(i == 1 && j ==3){
                break;
            }*/
            let $left = j*246;
            create.cell({

            "parentDom":$(".right").eq(1),
            "left":$left,
            "top":$top,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    }
    //搭配
    for(let i =0;i<2;i++){
        let $top = i*320+20;

        for(let j = 0 ;j<4;j++){
           /*
            if(i == 1 && j ==3){
                break;
            }*/
            let $left = j*246;
            create.cell({

            "parentDom":$(".right").eq(2),
            "left":$left,
            "top":$top,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    }
    //配件
    for(let i =0;i<2;i++){
        let $top = i*320+20;

        for(let j = 0 ;j<4;j++){
           /*
            if(i == 1 && j ==3){
                break;
            }*/
            let $left = j*246;
            create.cell({

            "parentDom":$(".right").eq(3),
            "left":$left,
            "top":$top,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    }
    //周边
    for(let i =0;i<2;i++){
        let $top = i*320+20;

        for(let j = 0 ;j<4;j++){
           /*
            if(i == 1 && j ==3){
                break;
            }*/
            let $left = j*246;
            create.cell({

            "parentDom":$(".right").eq(4),
            "left":$left,
            "top":$top,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    }
    //为你推荐 4列
    for(let j = 0 ;j<4;j++){
           
            let $left = j*266;
            create.cell({

            "parentDom":$(".allProducts").eq(6),
            "left":$left,
            "top":0,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    
    //热评产品 4列
     for(let j = 0 ;j<4;j++){
           
            let $left = j*266;
            create.cell({

            "parentDom":$(".allProducts").eq(7),
            "left":$left,
            "top":0,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    //内容
     for(let j = 0 ;j<4;j++){
           
            let $left = j*266;
            create.cell({

            "parentDom":$(".allProducts").eq(8),
            "left":$left,
            "top":0,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }
    //视频
    for(let j = 0 ;j<4;j++){
           
            let $left = j*266;
            create.cell({

            "parentDom":$(".allProducts").eq(9),
            "left":$left,
            "top":0,
            "introTitle":arrSingleProTitle[j],
            "introInfo":arrSingleProIntroInfo[j],
            "priceNow":arrSingleProPriceNow[j]
                
         });
        }





	
});