$(function(){
    //定义dom
    var $yqqfooter = $('#yqq-footer');
    var $navscroll = $('#nav-scroll');
    //尾部内容
    var $footertCon = `<div class="container">
                        <div class="row yqq-footer-top">
                            <div class="col-sm-8 yqqfooter-left col-lg-8">
                                <img src="./img/logo-bottom.png" alt="">
                                <p class="yqq-footer-title">
                                    <a href="">冰鉴简介</a>
                                    <span>|</span>
                                    <a href="">管理团队</a>
                                    <span>|</span>
                                    <a href="">新闻中心</a>
                                    <span>|</span>
                                    <a href="">加入我们</a>
                                    <span>|</span>
                                    <a href="">合作通道</a>
                                    <span>|</span>
                                    <a href="">练习我们</a>
                                </p>
                            </div>
                            <div class="col-sm-4 yqq-footer-right  col-lg-4" >
                                <p><i class="iconfont icon-iconfontdianhua1"></i><a href="">+86-21-68592015</a></p>
                                <p><i class="iconfont icon-xinfeng1"></i><a href="">info@ickredit.com</a></p>
                                <p><i class="iconfont icon-ditu"></i><a href="">上海浦东新区商城路618良友大厦4楼B207</a></p>
                            </div>
                        </div>
                        <div class="row yqq-footer-bigwechat">
                            <div class="col-sm-12 footer-vipcn col-lg-12">
                                <p><i class="iconfont icon-weixin"></i>微信公众号：ice_kredit</p>
                                <p>扫一扫关注我们</p>
                            </div>
                            <div class="col-sm-12 footer-sm-wechat col-lg-12">
                                <img src="./img/Icekredit-QRcode.png" alt="">
                            </div>
                        </div>
                        <div class="row yqq-footer-base">
                            <div class="col-sm-12 yqq-footer-bot col-lg-12">
                                <div class="yqq-filing">
                                    <img src="./img/police.png" alt="">
                                    <a href="">沪公安网备 31011502400399</a>
                                </div>
                                <div class="yqq-footer-address">
                                    <span>Copyright ©2015-2020 上海冰鉴信息科技有限公司 </span>
                                    <a href="">沪ICP备15035333号-1</a>
                                </div>
                            </div>
                        </div>
                    </div> `;
    //右边返回顶部和二维码
    var $navScroll = `<div class="back-top" style="display:none">
                        <i class="iconfont icon-fanhuidingbu yqqicon"></i>
                    </div>
                    <div class="right-wechat">
                        <i class="iconfont icon-erweima1 yqqicon"></i>
                        <div class="nav-wechat">
                            <img src="./img/Icekredit-QRcode-w.png" alt="">
                            <p>
                                <i class="iconfont icon-weixin"></i>
                                <span>微信扫一扫关注</span>
                            </p>
                        </div>
                    </div>`;
    var $yqqcontent = $($footertCon);  //尾部内容
    var $yqqScroll = $($navScroll);    //右下角返回顶部
    $($yqqfooter).append($yqqcontent);   
    $($navscroll).append($yqqScroll);
    //点击back-top返回顶部
    $('.back-top').click(function(){
        // console.log(1111)
        $('html,body').animate({scrollTop:0})
    });
    $(window).scroll(function(){
        var scroH = $(document.documentElement)[0].scrollTop;   //滚动高度
        console.log(scroH)
        if(scroH >200 ){
            $('.back-top').css('display','block')
        }else{
            $('.back-top').css('display','none')
        }

        
    })

});