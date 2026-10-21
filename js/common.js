document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const gnb = document.querySelector(".gnb");
    const subGnb = document.querySelector(".sub-gnb");
    const gnbItems = document.querySelectorAll(".gnb-list > li");
    const subLists = document.querySelectorAll(".sub-gnb-inner .sub-list");

    let closeTimer = null;
    let lastScrollY = window.scrollY;
    const HEADER_HEIGHT = header.offsetHeight;

    /* 서브메뉴 너비를 GNB 항목 너비에 맞춤 */
    const syncSubGnbWidth = () => {
        gnbItems.forEach((item, i) => {
            if (subLists[i]) subLists[i].style.width = item.offsetWidth + "px";
        });
    };
    syncSubGnbWidth();
    window.addEventListener("resize", syncSubGnbWidth);

    /* 서브메뉴 열기 / 닫기 */
    const openSubGnb = () => {
        clearTimeout(closeTimer);
        subGnb.classList.add("active");
        header.classList.add("is-open");
    };

    const closeSubGnb = () => {
        clearTimeout(closeTimer);
        closeTimer = setTimeout(() => {
            subGnb.classList.remove("active");
            header.classList.remove("is-open");
        }, 80);
    };

    /* gnb, sub-gnb 둘 중 하나라도 마우스가 올라가 있으면 유지 (로고는 제외) */
    [gnb, subGnb].forEach((el) => {
        el.addEventListener("mouseenter", openSubGnb);
        el.addEventListener("mouseleave", closeSubGnb);
    });

    /* 스크롤: 내리면 헤더 숨김, 올리면 헤더 표시 */
    window.addEventListener("scroll", () => {
        const currentY = window.scrollY;

        if (currentY <= 0) {
            header.classList.remove("header-hidden");
            lastScrollY = 0;
            return;
        }

        const diff = currentY - lastScrollY;

        if (diff > -5 && diff < 5) return;

        if (diff > 0 && currentY > HEADER_HEIGHT) {
            header.classList.add("header-hidden");
            subGnb.classList.remove("active");
            header.classList.remove("is-open");
        } else if (diff < 0) {
            header.classList.remove("header-hidden");
        }

        lastScrollY = currentY;
    });
});

