$(function(){
    // 모든 a태그의 기본속성 막기
    $("a").click(function(e) {
        e.preventDefault();
    });

    // 화면 scroll에 따른 header 위치 변경
    // 윈도우 객체에 스크롤 이벤트 설정
    $(window).scroll(function() {
        let winTop = $(this).scrollTop();
        if(winTop >= 100) {
            $("header").addClass("sticky");
            $(".search-area").addClass("sticky");
        }else {
            $("header").removeClass("sticky");
            $(".search-area").removeClass("sticky");
        }
    });

    // 메뉴 아이콘을 클릭하면 .sitemap영역이 나타남
    $(".menu-btn").click(function(){
        $(".sitemap").fadeIn(200);
        $("html, body").css("overflow", "hidden");
    });
    
    // .sitemap영역의 close버튼을 클릭하면 .sitemap영역 사라짐
    $(".close-btn").click(function(){
        $(".sitemap").fadeOut(200);
        $("html, body").css("overflow", "auto");
    });
    
    // .sitemap영역을 클릭해도 .sitemap영역 사라짐
    $(".sitemap-bg").click(function(){
        $(".sitemap").fadeOut(200);
        $("html, body").css("overflow", "auto");
    });
    // sitemap영역 안의 메뉴 옆의 -버튼을 클릭하면 서브메뉴 사라지고,
    // +버튼을 클릭하면 서브메뉴 나타남
    $(".menu2 > ul > li > a i").click(function() {
        $(this).find(".barY").toggle();
        $(this).parents("li").find(".sub").toggle();
    });
    // header의 검색 버튼을 클릭하면 .search-area영역 나타남
    let sw=0;
    $(".member ul li:last").click(function(){
        if(sw == 0) {
            sw=1;
            $(this).find(".search-icon").hide();
            $(this).find(".close-icon").show();
            $(".search-area").fadeIn(200);
            $("html, body").css("overflow", "hidden");
        }else {
            sw=0;
            $(this).find(".search-icon").show();
            $(this).find(".close-icon").hide();
            $(".search-area").fadeOut(200);
            $("html, body").css("overflow", "auto");
        }
    });
    $(".search-bg").click(function(){
        sw=0;
        $(".member ul li:last").find(".search-icon").show();
        $(".member ul li:last").find(".close-icon").hide();
        $(".search-area").fadeOut(200);
        $("html, body").css("overflow", "auto");
    });
    $(".input-area").click(function(){
        $(this).css("border", "1px solid #333");
    });
    // .input-area의 input에 포커스가 이동하면 .input-area의 
    // 테두리 진하게 하기
    $(".input-area input").on("focus", function(){
        $(".input-area").css("border", "1px solid #333");
    });
    
    // .input-area의 input의 input에서 포커스 아웃되면 .input-area의
    // 테두리 흐리게 하고, .clear-btn 사라짐
    $(".input-area input").on("focusout", function(){
        $(".input-area").css("border", "1px solid #ddd");
    });

    // main swiper slide
    let swiper = new Swiper(".mainSwiper", {
        effect:"fade",
        fadeEffect:{
            crossFade:true
        },
        loop:true,
        autoplay:{
            delay:4000
        },
        speed:500,
        pagination:{
            el:".swiper-pagination",
            clickable:true,
            type:"bullets",
            renderBullet:function(index, className){
                return '<span class="' + className
                + '"><i></i><b></b></span>';
            }
        },
        navigation:{
            nextEl:".swiper-button-next",
            prevEl:".swiper-button-prev"
        }
    });
    // scrollTriger(section.s2)
    ScrollTrigger.create({
        trigger:".s2 .left-con",
        start: "top 60px",
        end: "bottom top",
        pin: true,
        scrub: 2
    });

    let gallerySlide = new Swiper(".gallerySlide", {
        slidesPerView: "auto",
        spaceBetween: 20,
        speed: 1000,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        },
    });

    // scrollTriger(section.s5)
    ScrollTrigger.create({
        trigger:".s5 .left-con",
        start: "top 60px",
        end: "bottom top",
        pin: true,
        scrub: 2
    });

    // family site
    let sw2 = 0;
    $(".family > a").click(function(e){
        e.preventDefault();
        if(sw2 == 0) {
            sw2 = 1;
            $(this).find("span").css("transform", "rotateX(180deg)");
            $(this).parent().find(".sub").slideDown();
        }else { 
            sw2 = 0;
            $(this).find("span").css("transform", "rotateX(0deg)");
            $(this).parent().find(".sub").slideUp();
        }
    });

    // top버튼
    $(".top").click(function(){
        $("html, body").animate({scrollTop:0}, 1000);
    });
});