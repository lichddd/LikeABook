$().ready(function () {

function gradientColor(startColor,endColor,step){
       startRGB = this.colorRgb(startColor);//转换为rgb数组模式
       startR = startRGB[0];
       startG = startRGB[1];
       startB = startRGB[2];

       endRGB = this.colorRgb(endColor);
       endR = endRGB[0];
       endG = endRGB[1];
       endB = endRGB[2];

       sR = (endR-startR)/step;//总差值
       sG = (endG-startG)/step;
       sB = (endB-startB)/step;

       var colorArr = [];
       for(var i=0;i<step;i++){
		   //计算每一步的hex值 
           var hex = this.colorHex('rgba('+parseInt((sR*i+startR))+','+parseInt((sG*i+startG))+','+parseInt((sB*i+startB))+',1)');
           colorArr.push(hex);
       }
       return colorArr;
   }

   // 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
   gradientColor.prototype.colorRgb = function(sColor){
       var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
       var sColor = sColor.toLowerCase();
       if(sColor && reg.test(sColor)){
           if(sColor.length === 4){
               var sColorNew = "#";
               for(var i=1; i<4; i+=1){
                   sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1));
               }
               sColor = sColorNew;
           }
           //处理六位的颜色值
           var sColorChange = [];
           for(var i=1; i<7; i+=2){
               sColorChange.push(parseInt("0x"+sColor.slice(i,i+2)));
           }
           return sColorChange;
       }else{
           return sColor;
       }
   };
   
 gradientColor.prototype.colorHex = function(rgb){
       var _this = rgb;
       var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
       if(/^(rgb|RGB)/.test(_this)){
           var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g,"").split(",");
           var strHex = "#";
           for(var i=0; i<aColor.length; i++){
               var hex = Number(aColor[i]).toString(16);
               hex = hex<10 ? 0+''+hex :hex;// 保证每个rgb的值为2位
               if(hex === "0"){
                   hex += hex;
               }
               strHex += hex;
           }
           if(strHex.length !== 7){
               strHex = _this;
           }
           return strHex;
       }else if(reg.test(_this)){
           var aNum = _this.replace(/#/,"").split("");
           if(aNum.length === 6){
               return _this;
           }else if(aNum.length === 3){
               var numHex = "#";
               for(var i=0; i<aNum.length; i+=1){
                   numHex += (aNum[i]+aNum[i]);
               }
               return numHex;
           }
       }else{
           return _this;
       }
   }
	
	



var pagenum=100;




    	var gradient1 = new gradientColor('#E50743','#F9870F',pagenum);
		var gradient2 = new gradientColor('#F9870F','#E8ED30',pagenum);
		var gradient3 = new gradientColor('#E8ED30','#3FA62E',pagenum);
		var gradient4 = new gradientColor('#3FA62E','#3BB4D7',pagenum);
		var gradient5 = new gradientColor('#3BB4D7','#2F4D9E',pagenum);
		var gradient6 = new gradientColor('#2F4D9E','#71378A',pagenum);
		var gradients= gradient1.concat(gradient2).concat(gradient3).concat(gradient4).concat(gradient5).concat(gradient6);

    

for (var i = 1; i < 100; i++) {
	$('[name="book"]').append('<div style="font-size: 96px;background-color:'+gradients[Math.floor(gradients.length*i/pagenum)]+'">'+i+'</div>');
}
		$('[name="book"]').likeABook();
	
		
		$('#num').on('keypress',function (e) {
			if (e.keyCode==13) {
				var $self=$(this);
				$('[name="book"]').each(function (index,ele) {
					
					
					var aaa="";
					$(ele).data('my.likeABook').goto($self.val());
				});
			}
			
			
			
			
		})
	

	
	
	
	
	
	
	
	
})

