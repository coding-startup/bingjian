$(function () {
	//头部导航条的js
	$(".nav-right-flex li a").on("mousemove", function () {
		$(this).addClass("active");
	});
	$(".nav-right-flex li a").on("touchmove", function () {
		$(this).addClass("active");
	});
	$(".nav-right-flex li a").on("touchend", function () {
		$(this).removeClass("active");
	});
});
//确定宽高
let fn2 = function () {
	if ($(window).width() <= 768) {
		$(".container-fluid").addClass("small");
		let wi = $(".swiper-slide.core .text").width();
		$(".swiper-slide.core  img").width(wi);
		$(".swiper-slide.core  img").height(wi * 0.52);
	} else {
		$(".swiper-slide.core .graph").height(
			$(".swiper-slide.core .text").height() > 362
				? 362 + "px"
				: $(".swiper-slide.core .text").height()
		);
		$(".swiper-slide.core .graph .imgBg2 img").width(
			$(".swiper-slide.core .graph").width()
		);
		$(".container-fluid").removeClass("small");
	}
};
fn2();
$(window).on("resize", fn2);

// 整屏 竖向的swiper
let swiper1 = new Swiper("#swiper1", {
	// 如果需要分页器
	direction: "vertical",
	touchRatio: 0, //停止滑动
	mousewheel: true, //开启鼠标控制切换
	pagination: {
		el: ".exterior-pagination",
		progressbarOpposite: true, //水平方向垂直  垂直方向水平
		dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
		dynamicMainBullets: 1, //动态分页器显示的数量
		clickable: true, //点击
	},
	on: {
		slideChangeTransitionEnd: function () {
			isAdd(this.activeIndex);
			switch (this.activeIndex) {
				case 1:
					fn1();
					break;
			}
		},
		init: function () {
			isAdd(this.activeIndex);
			fn2();
		},
	},
});
//点击小屏幕的下拉列表的li 切换屏幕
$(".dropdown-select>li")
	.not(".multiple")
	.click(function () {
		swiper1.slideTo($(this).index(), 1000, false);
		if ($(this).index() == 1) {
			fn1();
		}
		$(".dropdown-select>li")
			.removeClass("show")
			.eq($(this).index())
			.addClass("show");
	});

// 第二个执行
function fn1() {
	$(".indexContainer .core .inUp").addClass("animate__fadeInUp");
	$(".indexContainer .core .inDown").addClass("animate__fadeInDown");
}

// 看下标是是不是 0 3 动态添加类型 或者 1 2
function isAdd(index) {
	if (index == 0 || index == 3) {
		$(".container-fluid").addClass("odd");
	} else if (index == 1 || index == 2) {
		$(".container-fluid").removeClass("odd");
	}
	$($(".navbar .navbar-right .nav-right-item")[index])
		.addClass("show")
		.siblings()
		.removeClass("show");
	console.log($(".dropdown-select>li"));
	$(".dropdown-select>li").removeClass("show").eq(index).addClass("show");
}

//初始化清除class类名  然后动态添加
$("#interior .swiper-slide .base").removeClass("animate__fadeIn");
$("#interior .swiper-slide").eq(0).find(".base").addClass("animate__fadeIn");
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
$(".swiper-slide.core .graph")[0].ontouchmove = function (e) {
	let x = e.touches[0].clientX;
	$(".swiper-slide.core .graph .imgBg2").width(x);
};

//小屏幕下的点击导航条 出现二级菜单
$(".dropdown-select>li").click(function () {
	$(this)
		.toggleClass("false")
		.css({
			display: "block",
		})
		.siblings()
		.removeClass("false");
	$(".dropdown-select>li")
		.removeClass("show")
		.eq($(this).index())
		.addClass("show");
});
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
$(".navbar .btn-group .btn").click(function () {
	//获取现在的状态

	let isBlock = $(".navbar .btn-group .dropdown-select").css("display");
	if (isBlock == "block") {
		$(this).removeClass("click");
		$(".navbar .btn-group .dropdown-select").css({
			display: "none",
		});
	} else {
		$(this).addClass("click");
		$(".navbar .btn-group .dropdown-select").css({
			display: "block",
		});
	}
});

//中英文切换效果
$(".navbar-left").click(function () {
	translate();
});
$(function(){
	// do something
	var script=document.createElement("script");
	script.type="text/javascript";
	script.src="common/translate.js";
	document.getElementsByTagName('head')[0].appendChild(script);
	var value = sessionStorage.getItem("language");
	document.onreadystatechange = function () {
	 if (document.readyState == 'complete') {
	  if(value==="1"){
	   Microsoft.Translator.Widget.Translate('zh-CHS', 'en', onProgress, onError, onComplete, onRestoreOriginal, 2000);
	  }
	 }
	}
	function onProgress(value) {
	}
	function onError(error) {
	}
	function onComplete() {
	 $("#WidgetFloaterPanels").hide();
	}
	function onRestoreOriginal() {
	}
   });
   function translate(){
	var value = sessionStorage.getItem("language");
	if(value==="1"){
	 sessionStorage.setItem("language", "0");
	}else{
	 sessionStorage.setItem("language", "1");
	}
	window.location.reload();//刷新当前页面.
   }
