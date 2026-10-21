$(document).ready(function () {

    // 각 뉴스 Swiper 초기화
    var newsSwipers = [];

    $(".newsSwiper").each(function () {
        var panel = $(this).closest(".news-panel");

        var swiper = new Swiper(this, {
            slidesPerView: 3,
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
                    slidesPerView: 3,
                    spaceBetween: 0
                }
            }
        });

        newsSwipers.push(swiper);
    });

    // 탭 클릭
    $(".news-tabs li").click(function () {

        // 모든 탭의 active 제거 후 클릭한 탭에 추가
        $(".news-tabs li").removeClass("active");
        $(this).addClass("active");

        // 클릭한 탭의 data-tab 값 가져오기
        var tabId = $(this).data("tab");

        // 모든 뉴스 패널 숨기기
        $(".news-panel").removeClass("active");

        // 선택한 뉴스 패널만 표시
        $("#" + tabId).addClass("active");

        // 활성화된 Swiper 크기 갱신
        newsSwipers.forEach(function (swiper) {
            if ($(swiper.el).closest(".news-panel").hasClass("active")) {
                swiper.update();
            }
        });

    });

});