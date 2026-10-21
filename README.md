# ISAAC TOAST 🍞 - 이삭토스트 메인페이지 클론코딩

**이삭토스트 공식 홈페이지의 메인페이지**를 분석하여 똑같이 구현한 클론코딩 프로젝트입니다.
HTML &middot; CSS &middot; JAVASCRIPT(jQuery)와 **Swiper**, **AOS** 라이브러리로 만든 학습용 포트폴리오 프로젝트입니다.

❗❗ 이삭토스트 공식 사이트가 아니며, 학습 목적으로 제작된 클론코딩 결과물입니다. 사용된 로고 및 이미지의 저작권은 (주)이삭에 있습니다.

** Demo ** : 깃배포주소 : https://projecteam7389.github.io/cloneCoding-IsaacToast/

---

## 주요 기능
| 기능 | 설명 | 관련 파일 |
| --- | --- | --- |
| 공통 | 헤더(GNB / 서브메뉴), 푸터 등 모든 페이지에 공통으로 들어가는 요소를 작성 | `css/common.css`, `js/common.js` |
| 헤더 | GNB에 마우스를 올리면 **전체 서브메뉴**가 펼쳐지고, 스크롤을 내리면 헤더가 숨겨지고 올리면 다시 표시 | `css/common.css`, `js/common.js` |
| 메인 비주얼 | 7개의 이미지가 **페이드 효과**로 자동 전환되는 메인 슬라이드, 페이지네이션 및 스크롤 다운 버튼 | `index.html`, `css/style.css`, `js/script.js` |
| 브랜드 | 브랜드 소개 문구와 **브랜드 스토리** 버튼, 스크롤 시 순차적으로 나타나는 애니메이션 | `index.html`, `css/style.css`, `js/aos.js` |
| 메뉴 | **토스트 / 세트메뉴 / 사이드 / 음료** 탭 전환 + 탭별 메뉴 슬라이드(4개씩 노출) | `index.html`, `css/style.css`, `js/script.js` |
| 뉴스 | **전체 / 공지사항 / 이벤트** 탭 전환 + 탭별 뉴스 카드 슬라이드(3개씩 노출) | `index.html`, `css/style.css`, `js/script.js` |
| 하단 배너 | 가맹점주 모집 배너와 **가맹 문의하기** 버튼 | `index.html`, `css/style.css` |
| 푸터 | 약관 링크, SNS 아이콘, 사업자 정보 및 지점별 연락처 | `css/common.css` |

### 메인 슬라이드 상세
- Swiper `fade` 효과 (crossFade 적용), 전환 속도 1.5초, 3초 간격 자동재생
- 사용자가 슬라이드를 조작해도 자동재생이 유지됨 (`disableOnInteraction: false`)
- 6, 7번 슬라이드는 배경 이미지 위에 **텍스트 이미지**를 겹쳐서 표시

### 탭 + 슬라이드 상세
- 탭 클릭 시 `data-tab` 값과 일치하는 패널에만 `active` 클래스를 부여해 표시
- 탭 전환 후 활성화된 Swiper를 `update()` 하여 숨겨져 있던 슬라이드의 크기를 재계산
- 반응형 브레이크포인트 : 모바일 1개 → 680px 이상 2개 → 1024px 이상 4개(메뉴) / 3개(뉴스)

### 스크롤 애니메이션
- AOS 라이브러리를 사용하여 `fade-up`, `fade-right` 효과 적용
- `data-aos-delay` 값을 순차적으로 주어 제목 → 문구 → 버튼 순서로 등장

---

## 기술 스택
- **Frontend** : HTML5, CSS3, Javascript, jQuery 3.7.1
- **Library** : [Swiper](https://swiperjs.com) v14.0.1 (슬라이드), [AOS](https://michalsnik.github.io/aos/) v2.3.1 (스크롤 애니메이션)
- **Font** : Pretendard Variable, Noto Sans KR, Lexend, NEXON Lv1 Gothic
- **Deploy** : Github Pages

---

## 구조설계
```text
ISAAC TOAST
├── index.html        # 메인페이지
├── img-Isaac/        # 사용 이미지 (로고, 메인 비주얼, 메뉴, 뉴스, 아이콘 등)
├── css/
│   ├── fonts.css     # 사용 Font
│   ├── reset.css     # 사용 Reset
│   ├── common.css    # 공통 CSS (변수, 헤더, 푸터)
│   └── style.css     # 메인페이지 CSS
└── js/
    ├── aos.js        # AOS 초기화 설정
    ├── common.js     # 헤더 서브메뉴 열기/닫기, 스크롤 시 헤더 숨김
    ├── data.js       # 데이터 파일 (현재 비어 있음)
    └── script.js     # 메인 슬라이드, 메뉴/뉴스 탭 및 슬라이드 통합 스크립트
```

## 디자인 설정

### 1. Color
| 변수 | 색상 | 용도 |
| --- | --- | --- |
| `--brand` | `#ff281e` | 메인 브랜드 컬러 (메뉴 섹션 배경, 포인트, 호버) |
| `--black` | `#181818` | 기본 텍스트 |
| `--white` | `#fff` | 배경 및 반전 텍스트 |
| `--bg-footer` | `#ffe68c` | 푸터 배경 |

### 2. Font
| 변수 | 폰트 | 용도 |
| --- | --- | --- |
| `--titleFont` | Lexend, Noto Sans KR | 섹션 타이틀, 영문 텍스트 |
| `--textFont` | NexonLv1Gothic, Noto Sans KR | 본문 소제목 |

## 구현 포인트
- CSS 변수(`:root`)로 색상과 폰트를 관리하여 유지보수 용이
- `.menu` / `.news` 섹션에 **섹션별 CSS 변수**(`--tab-color`, `--tab-active-bg`, `--arrow-color` 등)를 두어 **탭, 화살표, 카드 스타일을 공통 코드로 처리**하고 차이점만 분기
- `sub-gnb`의 너비를 GNB 각 항목의 너비에 맞춰 JS로 동기화 (`syncSubGnbWidth`)
- 스크롤 방향을 감지하여 헤더를 숨기고 보여주는 UX 구현
- 마우스 이탈 시 `setTimeout`으로 약간의 지연을 주어 서브메뉴가 깜빡이지 않도록 처리

## 개선 예정

- [✔] 메인 비주얼 슬라이드
- [✔] 메뉴 / 뉴스 탭 슬라이드
- [✔] 헤더 서브메뉴 및 스크롤 헤더 숨김
- [ ] 슬라이드 안 카드영역 이미지 추가 (현재는 기본이미지로 통일)
- [ ] 반응형(태블릿 / 모바일) 헤더 및 햄버거 메뉴 구현
- [ ] `script.js`와 `menu.js` / `news.js` 중복 코드 정리
- [ ] 서브페이지 (브랜드, 메뉴, 커뮤니티 등) 제작