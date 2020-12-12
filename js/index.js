// 整屏 竖向的swiper
var swiper1 = new Swiper("#swiper1", {
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
				case 2:
					fn3();
					break;
				case 3:
					swiper1.detachEvents();
					break;
			}
		},
		init: function () {
			isAdd(this.activeIndex);
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
//第三个执行
function fn3() {
	$(".product .bgImage").addClass("animate__fadeIn");
	$(".product .bom").addClass("animate__fadeInDown");
	$(".product .up").addClass("animate__fadeInUp");
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
var swiper2 = new Swiper("#interior", {
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

//产品的swiper
var swiper3 = new Swiper("#productSwiper", {
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
	on: {},
});
function fn5() {
	swiper1.update();
	swiper2.update();
	swiper3.update();
}
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
	if ($(window).width() <= 400) {
	}
	fn5();
	console.log("改变宽高了");
};
fn2();
$(window).on("resize", fn2);
