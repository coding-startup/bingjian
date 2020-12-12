$(function () {
	//头部导航条的js
	$(".nav-right-flex li a").on("mousemove", function () {
		$(this).addClass("active");
		console.log("加active1")
	});
	$(".nav-right-flex li a").on("touchmove", function () {
		$(this).addClass("active");
		console.log("加active2")
	});
	$(".nav-right-flex li a").on("touchend", function () {
		$(this).removeClass("active");
		console.log("删除active2")
	});
});
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


