import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import styles from './Lemon.module.css';
import Slider from "react-slick";

function OverVIew1() {
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "SliderDot"
    };
    return (
        <div className={styles.overviewSlide}>
            <Slider {...settings}>
                <div className={styles.detailContainer}>
                    <div className={styles.overview1}>
                        <p>
                            실시간 차트<br />
                            한 눈에 확인하기.
                        </p>
                        <img className={styles.pc} src="bg/portfolio/lemon/mockup/chart.png" alt="chartPreView" />
                        <img className={styles.mobile} src="bg/portfolio/lemon/mockup/mobile/chart.png" alt="mobileChartPreView" />
                    </div>
                </div>
                <div className={styles.detailContainer}>
                    <div className={styles.overview2}>
                        <p>
                            곡, 아티스트 검색은 물론<br />
                            스트리밍까지.
                        </p>
                        <img className={styles.pc} src="bg/portfolio/lemon/mockup/search.png" alt="searchPreView" />
                        <img className={styles.mobile} src="bg/portfolio/lemon/mockup/mobile/search.png" alt="mobileSearchPreView" />
                    </div>
                </div>
                <div className={styles.detailContainer}>
                    <div className={styles.overview3}>
                        <p>
                            다양한 플레이리스트로<br />
                            선곡 고민 해결
                        </p>
                        <img className={styles.pc} src="bg/portfolio/lemon/mockup/explore.png" alt="explorePreView" />
                        <img className={styles.mobile} src="bg/portfolio/lemon/mockup/mobile/explore.png" alt="mopbileExplorePreView" />
                    </div>
                </div>
            </Slider>
        </div>
    );
}

function Lemon() {
    useEffect(() => {
        let options = {
            threshold: [0.25, 1]
        }

        let observer = new IntersectionObserver((e) => {
            e.forEach((target) => {
                if (target.isIntersecting) {
                    target.target.style.opacity = 1;
                } else {
                    target.target.style.opacity = 0;
                }
            })
        }, options);

        let e = document.querySelectorAll('#observe');
        observer.observe(e[0])
        observer.observe(e[1])
        observer.observe(e[2])
        observer.observe(e[3])

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <div className={styles.warning}>
                <span>
                    경고
                </span>
                <span>
                    본 페이지는 더 이상 동작하지 않습니다.
                    <br/>
                    API에 원인을 알 수 없는 오류가 발생하여 페이지를 사용할 수 없습니다.
                </span>
            </div>
            <div className={styles.title}>
                <img src="bg/portfolio/lemon/logo_img.png" alt="Lemon Music Logo" />
                <div className={styles.titleGd}></div>
                <div className={styles.titleBg}></div>
            </div>
            <div className={styles.overview} id="observe">
                <div className={styles.content}>
                    <span className={styles.contentName}>
                        서비스 둘러보기
                    </span>
                    <OverVIew1 />
                </div>
            </div>

            <div className={styles.deepDescription1}>
                <span className={styles.deepContentName} id="observe">
                    깊게 살펴보기
                </span>
                <div className={styles.field} id={styles.grid}>
                    <div className={`${styles.tile} ${styles.center}`}>
                        <p className={styles.tileTitle}>
                            세상에서 가장 정확한 인기 차트.
                        </p>
                        <p className={styles.tileSubTitle}>
                            <b>22억</b> 사용자를 보유한 YouTube의 데이터를
                            기반으로 매 주 선정되는 인기 차트를 확인하세요.
                        </p>
                    </div>
                    <img src="bg/portfolio/lemon/screenshot/chart.png" alt="chart_screenshot" />
                </div>
                <div className={styles.field} id={styles.rightGrid}>
                    <div className={styles.tile}>
                        <p className={styles.tileTitle}>
                            원하는 곡 찾기
                        </p>
                        <p className={styles.tileSubTitle}>
                            곡 이름으로 검색할 수도 있고,
                        </p>
                    </div>
                    <img className={styles.pc} src="bg/portfolio/lemon/screenshot/search1.png" alt="search_screenshot" />
                    <img className={styles.mobile} src="bg/portfolio/lemon/screenshot/mobile/search1_mobile.png" alt="search_screenshot" />
                </div>
                <div className={styles.field} id={styles.leftGrid}>
                    <img className={styles.pc} src="bg/portfolio/lemon/screenshot/search2.png" alt="search_screenshot" />
                    <img className={styles.mobile} src="bg/portfolio/lemon/screenshot/mobile/search2_mobile.png" alt="search_screenshot" />
                    <div className={styles.tile}>
                        <p className={styles.tileTitle}>
                            누가 부른 노래였나요?
                        </p>
                        <p className={styles.tileSubTitle}>
                            아티스트 명으로도 검색 할 수 있어요.
                        </p>
                    </div>
                </div>
                <div className={styles.field} id={styles.rightGrid}>
                    <div className={styles.tile}>
                        <p className={styles.tileTitle}>
                            커버곡을 찾고 있다고요?
                        </p>
                        <p className={styles.tileSubTitle}>
                            YouTube 영상도 찾을 수 있답니다.
                        </p>
                    </div>
                    <img className={styles.pc} src="bg/portfolio/lemon/screenshot/search3.png" alt="search_screenshot" />
                    <img className={styles.mobile} src="bg/portfolio/lemon/screenshot/mobile/search3_mobile.png" alt="search_screenshot" />
                </div>
                <div className={styles.field} id={styles.leftGrid}>
                    <img className={styles.pc} src="bg/portfolio/lemon/screenshot/explore1.png" alt="search_screenshot" />
                    <img className={styles.mobile} src="bg/portfolio/lemon/screenshot/mobile/explore1_mobile.png" alt="search_screenshot" />
                    <div className={styles.tile}>
                        <p className={styles.tileTitle}>
                            추천 리스트를 보고 싶으신가요?
                        </p>
                        <p className={styles.tileSubTitle}>
                            YouTube 추천 플레이리스트를 찾아보세요.
                        </p>
                    </div>
                </div>
                <div className={styles.field} id={styles.rightGrid}>
                    <div className={styles.tile}>
                        <p className={styles.tileTitle}>
                            마음에 드는 플레이리스트를 찾으셨나요?
                        </p>
                        <p className={styles.tileSubTitle}>
                            그럼 이제 원하는 곡을 골라봅시다.
                        </p>
                    </div>
                    <img className={styles.pc} src="bg/portfolio/lemon/screenshot/explore2.png" alt="explore_screenshot" />
                    <img className={styles.mobile} src="bg/portfolio/lemon/screenshot/mobile/explore2_mobile.png" alt="search_screenshot" />
                </div>
                <div className={styles.field} id={styles.reverseGrid}>
                <div className={`${styles.tile} ${styles.center}`}>
                        <p className={styles.tileTitle}>
                            다 찾으셨나요? 그럼 이제 들어볼까요?
                        </p>
                        <p className={styles.tileSubTitle}>
                            나만의 재생목록을 만들고, 끊김 없이
                            스트리밍하세요.
                        </p>
                        <p className={styles.tileSubTitle}>
                            인터넷만 연결되어 있으면 됩니다.
                        </p>
                    </div>
                    <img src="bg/portfolio/lemon/screenshot/webPlayer.png" alt="chart_screenshot" />
                </div>
            </div>

            <div className={styles.deepDescription2}>
                <span className={styles.deepContentName} id="observe">
                    조금 더 깊은 곳으로...
                </span>
                <div className={styles.fieldWide} id={styles.gridWide}>
                    <img src="icon/portfolio/AWS-Lightsail.png" alt="chart_screenshot" />
                    <div className={`${styles.tile} ${styles.center}`}>
                        <p className={styles.tileTitle}>
                            AWS Lightsail 호스팅으로 끊김 없는 환경
                        </p>
                        <p className={styles.tileSubTitle}>
                            곡을 찾고, 차트를 확인하고, 플레이리스트를 찾고.
                        </p>
                        <p className={styles.tileSubTitle}>
                            원하는 곡을 자유롭게 재생하세요.
                        </p>
                    </div>
                </div>
                <div className={styles.fieldWide} id={styles.gridWide}>
                    <img src="icon/portfolio/FastAPI.png" alt="chart_screenshot" />
                    <div className={`${styles.tile} ${styles.center}`}>
                        <p className={styles.tileTitle}>
                            FastAPI로 구축된 깔끔하고 빠른 서버
                        </p>
                        <p className={styles.tileSubTitle}>
                            <b>express</b>보다 <b>1.5%</b>,&nbsp;
                            <b>django</b>, <b>Flask</b>보다 <b>2배</b> 향상된
                            성능으로
                        </p>
                        <p className={styles.tileSubTitle}>
                            빠른 응답 속도를 보여줍니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.deepDescription3}>
                <span className={styles.deepContentName} id="observe">
                    사용해보기
                </span>
                <div className={styles.lastField} id={styles.mobileFlexGrid}>
                    <img src="bg/portfolio/lemon/mockup/both.png" alt="lemon_mokup_1"/>
                    <div className={styles.tile}>
                        <p className={styles.tileTitle}>
                            Lemon Music
                        </p>
                        <div className={styles.primaryBtnDisabled}
                                title="더 이상 사용할 수 없는 페이지입니다.">
                            WEBSITE
                        </div>
                        <div className={styles.primaryBtn}
                                title="클릭하면 깃허브로 이동합니다."
                                onClick={ () => {
                                    window.open('https://github.com/jkw0781/LemonMusic',
                                            '_blank') 
                                    } }>
                            GITHUB
                        </div>
                        <div className={styles.primaryBtn}
                                title="클릭하여 스토리보드 PDF를 다운로드합니다."
                                onClick={ () => {
                                    window.open('https://docs.google.com/uc?export=download&id=1F_qOuGzQG7qLru5BQwR4d6o543AzLpnk',
                                            '_blank') 
                                    } }>
                            STORYBOARD
                        </div>
                        <div className={styles.stack}>
                            <div className={styles.stackIcon}>
                                <img src="icon/stack/html-icon.webp" alt="html" title="HTML5"/>
                                <img src="icon/stack/css-icon.webp" alt="html" title="CSS3"/>
                                <img src="icon/stack/js-icon.webp" alt="html" title="JavaScript"/>
                                <img src="icon/stack/jquery-icon.webp" alt="html" title="jQuery"/>
                                <img src="icon/stack/python-icon.webp" alt="html" title="Python"/>
                            </div>
                            자세한 기술 스택은&nbsp;
                            <a href="https://github.com/jkw0781/LemonMusic">Github</a>와&nbsp;
                            <a href="https://docs.google.com/uc?export=download&id=1F_qOuGzQG7qLru5BQwR4d6o543AzLpnk">스토리보드</a>
                            에서 확인 가능합니다.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Lemon;