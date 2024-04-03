import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './Main.css';
import Lemon from './portfolio/Lemon.js';
import TopDentalClinic from './portfolio/TopDentalClinic.js';
import About from './portfolio/About.js';

function Modal(props) {
    return (
        <div className="modal">
            <header>
                <div className="x-btn" title="창 닫기" onClick={props.closeModal}>X</div>
            </header>
            <div className="element">
                { props.componentName }
            </div>
        </div>
    );
};

function ModalHidden(props) {
    return (
        <div className="modalHidden">
            <header>
                <div className="x-btn" title="창 닫기" onClick={props.closeHiddenModal}>X</div>
            </header>
            <div className="element">
                { props.componentName }
            </div>
        </div>
    );
};

function MobileMain() {
    const [ isModalShow, setIsModalShow ] = useState(false);
    const [ isHiddenModalShow, setIsHiddenModalShow ] = useState(false);
    const [ modalCOmponent, setModalComponent ] = useState('');
    useEffect(() => {
        $('.MobileIcon').height( $('.MobileIcon').width() );

        $('.MobileScreen').width( $(window).width() + 'px' );
        $('.MobileScreen').height( $(window).height() + 'px' );
    }, []);


    $(window).on('resize', function() {
        $('.MobileScreen').width( $(window).width() + 'px' );
        $('.MobileScreen').height( $(window).height() + 'px' );
    }); 

    $(window).on('resize', function() {
        $('.Mainscreen').width( $(window).width() + 'px' );
        $('.Mainscreen').height( ( $('.Mainscreen').width() / 16 ) * 9 + 'px' );
    
        $('.MobileIcon').height( $('.MobileIcon').width() );
    }); 

    let datas = [ <Lemon/>, <TopDentalClinic/>, <About/> ];

    function handledbClick(e) {
        let data = datas[$(e.currentTarget).attr('data-no')];
        setModalComponent(data);
        setIsModalShow(true);
    }

    function handledbClick_Hidden(e) {
        $(e.currentTarget).removeClass("ative");
        let data = datas[$(e.currentTarget).attr('data-no')];
        setModalComponent(data);
        setIsHiddenModalShow(true);
    }

    function closeModal() {
        $('.modal').css({'animation': 'none', 'opacity': '1'});
        $('.modal').fadeOut(200, () => {
            setIsModalShow(false);
        });
    }
    
    function closeHiddenModal() {
        $('.modalHidden').css({'animation': 'none', 'opacity': '1'});
        $('.modalHidden').fadeOut(200, () => {
            setIsHiddenModalShow(false);
        });
    }


    return (
        <div className="Mainbg deSelect fadeInStatisc">
            { isModalShow && <Modal componentName = { modalCOmponent }
                                    closeModal = { closeModal }/> }
            { isHiddenModalShow && <ModalHidden componentName = { modalCOmponent }
                                    closeHiddenModal = { closeHiddenModal }/> }
            <div className="MobileScreen">
                <div className="MobileappField">
                    <div className="app_" data-no="0" onTouchStart={handledbClick}>
                        <div className="detail">
                            <div className="MobileIcon Lemon"></div>
                            <span className="MobileAppName">Lemon Music</span>
                        </div>
                    </div>
                    <div className="app_">
                        <div className="detail" data-no="1" onTouchStart={handledbClick_Hidden}>
                            <div className="MobileIcon TopDentalClinic"></div>
                            <span className="MobileAppName">광주탑치과</span>
                        </div>
                    </div>
                </div>
                <div className="MobileBackground"></div>
            </div>
        </div>
    )
}

export default MobileMain;