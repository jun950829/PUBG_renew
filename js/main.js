$(function () {

    //nav의 서브메뉴
    $("#nav>ul>li").click(function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".sub").css("display", "block");
        } else {
            $(".sub").css("display", "none");
        }
    })

    //slideMenu
    $(".mhamBtn").click(function() {
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            $(".slideMenu").stop().animate({
                marginRight: 0 + "%"
            },500)
        } else {
            $(".slideMenu").stop().animate({
                marginRight: -100 + "%"
            },500)
        }
    })

    //slideMenu li 누르면 sub 보이기
    $(".slideMenu>ul>li>.sub").hide();
    $(".slideMenu>ul>li").click(function(){
        $(this).children(".sub").slideToggle("fast");
    })



    var showBanner = 0;
    var liWidth = $(".esportsBanner>ul>li").width();
    console.log(liWidth);

    $(window).on("resize", function (e) {
        liWidth = $(".esportsBanner>ul>li").width();
    console.log(liWidth);



        function bannerMove() {
            $(".esportsBanner>ul").stop().animate({
                marginLeft: -showBanner * liWidth + "px"
            }, 1000)
        }

        $(".RightBtn>a").click(function (e) {
            e.preventDefault();


            showBanner++;

            if (showBanner == 2) {
                showBanner = 1;
            }

            bannerMove();
        })

        $(".LeftBtn>a").click(function (e) {
            e.preventDefault();

            showBanner--;
            if (showBanner < 0) {
                showBanner = 0;
            }
            bannerMove();
        })
    })

    $(".mapRight>.mapBtn>li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
    })

    $(".weaponsMenu>li>a").click(function() {
        $(this).parent("li").addClass("active").siblings().removeClass("active");
    })


})
