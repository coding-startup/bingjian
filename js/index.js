$(function () {
	//头部导航条的js
	$(".nav-right-flex li a").on("mousemove", function () {
		$(this).addClass("active");
	});
	$(".nav-right-flex li a").on("mouseleave", function () {
		$(this).removeClass("active");
	});
});

new Swiper("#swiper1", {
	// 如果需要分页器
	direction: "vertical",
	touchRatio : 0,//停止滑动
	mousewheel: true, //开启鼠标控制切换
	pagination: {
		el: ".exterior-pagination",
		progressbarOpposite: true, //水平方向垂直  垂直方向水平
		dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
		dynamicMainBullets: 1, //动态分页器显示的数量
		clickable :true, //点击
	},
	on: {
		slideChangeTransitionEnd: function () {
			console.log(this.activeIndex)
			switch (this.activeIndex) {
				case 1:
					fn1();
				break;
				
					
			}
		},
	},
});
// 第二个执行
function fn1() {

	$(".indexContainer .core .inUp").addClass("animate__fadeInUp");
	$(".indexContainer .core .inDown").addClass("animate__fadeInDown");
}
// 第三个执行
// function fn2() {

// }
//初始化清除class类名  然后动态添加
$("#interior .swiper-slide .base").removeClass("animate__fadeIn");
$("#interior .swiper-slide")
	.eq(0)
	.find(".base")
	.addClass("animate__fadeIn");
new Swiper("#interior", {
	// 如果需要分页器
	pagination: {
		el: ".swiper-pagination",
	},
	on: {
		slideChangeTransitionStart: function () {
			$("#interior .swiper-slide .base").removeClass("animate__fadeIn");
			$("#interior .swiper-slide")
				.eq(this.activeIndex)
				.find(".base")
				.addClass("animate__fadeIn");
		},
	},
	pagination: {
		el: ".swiper-pagination",
	},

	// 如果需要前进后退按钮
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
//走势图的效果，改变宽高

$(".swiper-slide.core .graph").on("mousemove", function (e) {
	$(".swiper-slide.core .graph .imgBg2").width(e.offsetX);
});
//确定宽高
let fn2 = function () {
	$(".swiper-slide.core .graph").height(
		$(".swiper-slide.core .text").height()>362?362+"px":$(".swiper-slide.core .text").height()
	);
	$(".swiper-slide.core .graph .imgBg2 img").width(
		$(".swiper-slide.core .graph").width()
	);
	if($(window).width()<=768){
		$(".container-fluid").addClass("small")
	}else{
		$(".container-fluid").removeClass("small")
	}
};
fn2();
$(window).on("resize", fn2);

//产品的swiper
new Swiper("#productSwiper", {
	// 如果需要分页器
	watchOverflow: true,
	slidesPerView: 1,
	spaceBetween: 40,
	pagination: {
		el: ".productSwiper-pagination",
	},
	breakpoints: {
		335: {
			//当屏幕宽度大于等于768
			slidesPerView: 1,
			spaceBetween: 20,
		},
		645: {
			//当屏幕宽度大于等于768
			slidesPerView: 2,
			spaceBetween: 20,
		},
		770: {
			//当屏幕宽度大于等于768
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1280: {
			//当屏幕宽度大于等于1280
			slidesPerView: 4,
			spaceBetween: 30,
		},
		2000: {
			//当屏幕宽度大于等于1280
			slidesPerView: 5,
			spaceBetween: 30,
		},
	},
});






//三道杠的点击下拉效果

$(".navbar .btn-group .btn").click(()=>{
	//获取现在的状态
	let isBlock=$(".navbar .btn-group .dropdown-select").css("display")
	if(isBlock=="block"){
		$(".navbar .btn-group .dropdown-select").css({
			display:'none'
		})
	}else{
		$(".navbar .btn-group .dropdown-select").css({
			display:'block'
		})
	}
})

