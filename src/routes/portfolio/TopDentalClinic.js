import React, { useState, useEffect } from 'react';
import {SectionsContainer, Section} from 'react-fullpage';
import $ from 'jquery';
import './TopDentalClinic.css'

let options = {
    anchors: ['1', '2', '3', '4']
};

function TopDentalClinic() {
    const [reloadComponent, setReloadComponent] = useState(false);
    
    useEffect(() => {
        if (reloadComponent) {
        // 특정 조건을 충족하면 컴포넌트를 다시 로드
        setReloadComponent(false);
        }
    }, [reloadComponent]);

    return (
        <SectionsContainer {...options}>
            <Section className="p1">
                <div className="middle">
                    <img src="icon/apps/TopDentalClinic.ico" alt="topdentalclinic"/>
                    <p>광주탑치과의원</p>
                </div>
            </Section>
            <Section className="p2">
                <div className="details">
                    <div>
                        <p className="detailTitle">기존 페이지의 새로운 변화</p>
                        <p className="detailSub">불편함은 줄이고 디자인은 살린</p>
                        <p className="detailSub">새로운 페이지로 리디자인</p>
                    </div>
                    <img src="gifs/topdentalclinic/preview1.gif" alt="previewGif1"/>
                </div>
            </Section>
            <Section className="p3">
                <div className="details">
                    <div>
                        <p className="detailTitle">간편한 이동, 향상된 사용자 경험</p>
                        <p className="detailSub">불필요한 라우팅은 최소화하고</p>
                        <p className="detailSub">필요한 정보는 모두 담은 레이아웃</p>
                    </div>
                    <img src="gifs/topdentalclinic/preview2.gif" alt="previewGif1"/>
                </div>
            </Section>
            <Section className="p4">
                <div className="details">
                    <p className="detailTitle">페이지 사용해 보기</p>
                    <div className="finalPreviewContainer">
                        <img src="bg/portfolio/topdentalclinic/both.png" alt="topdentalclinic_mokup_1"/>
                        <div className="detailText">
                            <p>TopDentalClinic</p>
                            <div className="Btns">
                                <div className="primaryBtn"
                                        title="클릭하면 서비스 url로 이동합니다."
                                        onClick={ () => {
                                            window.open('https://topdentalclinic.netlify.app/',
                                                    '_blank') 
                                            } }>
                                    WEBSITE
                                </div>
                            </div>
                            <div className="Btns">
                                <div className="primaryBtn"
                                        title="클릭하여 스토리보드 PDF를 다운로드합니다."
                                        onClick={ () => {
                                            window.open('https://docs.google.com/uc?export=download&id=1KRDmZu5gg7BEnavsAZ8Ukxqd875h3INh',
                                                    '_blank') 
                                            } }>
                                    STORYBOARD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </SectionsContainer>
    );
}

export default TopDentalClinic;