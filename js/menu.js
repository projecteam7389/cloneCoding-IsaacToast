$(document).ready(function () {

    // 각 메뉴 Swiper 초기화
    var menuSwipers = [];

    $(".menuSwiper").each(function () {
        var panel = $(this).closest(".menu-panel");

        var swiper = new Swiper(this, {
            slidesPerView: 4,
            spaceBetween: 30,
            speed: 600,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            loop: true,
            navigation: {
                nextEl: panel.find(".swiper-button-next")[0],
                prevEl: panel.find(".swiper-button-prev")[0]
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                680: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            }
        });

        menuSwipers.push(swiper);
    });

    // 탭 클릭
    $(".menu-tabs li").click(function () {

        // 모든 탭의 active 제거 후 클릭한 탭에 추가
        $(".menu-tabs li").removeClass("active");
        $(this).addClass("active");

        // 클릭한 탭의 data-tab 값 가져오기
        var tabId = $(this).data("tab");

        // 모든 메뉴 패널 숨기기
        $(".menu-panel").removeClass("active");

        // 선택한 메뉴 패널만 표시
        $("#" + tabId).addClass("active");

        // 활성화된 Swiper 크기 갱신
        menuSwipers.forEach(function (swiper) {
            if ($(swiper.el).closest(".menu-panel").hasClass("active")) {
                swiper.update();
            }
        });

    });

});