var swiper=new Swiper(".swiper-container",{
			keyboardControl:true,//键盘控制
			mousewheelControl:true,
			// direction:"vertical",
			autoplay:2000,
			loop:true,
			// autoplayDisableOnInteraction:true,//点击pagination或者滑动的时候，就停止不动了
		});
		$(function(){
			$(".selCity").css("display","none");
			var state=true;
			$("#header_left").click(function(){
				if (state){
					$(".selCity").show();
					$(".selCity_img").css("transform","rotate(180deg)");
					state=false;
				}else{
					$(".selCity").hide();
					$(".selCity_img").css("transform", "rotate(360deg)");
					state=true;
				}
			});
			$(".selCity li").click(function(){
				$(".selCity_text").html($(this).html());
			});

			clock();
			setInterval(clock,1000);
			function clock(){
			var newTime=new Date(2017,4,17,00,00,00);
			var nowTime=new Date();
			// console.log(newTime);
			var onlyTime=Math.floor((newTime-nowTime)/1000);

			var strTime=Math.floor(onlyTime/86400)+"天"+Math.floor(onlyTime%86400/3600)+"时"+Math.floor(onlyTime%86400%3600/60)+"分"+onlyTime%60+"秒";

			$(".count").html("距离开始："+strTime);
			}

			$("#table2").css("display","none");
			var state=true;
			$(".viewMore").click(function(){
				if (state){
					$("#table2").show();
					$(".viewMore").html("收起");
					state=false;
				}else{
					$("#table2").hide();
					$(".viewMore").html("查看全部团购");
					state=true;
				}
			})
		});
