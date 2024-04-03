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

function Main() {
    const [ isModalShow, setIsModalShow ] = useState(false);
    const [ isHiddenModalShow, setIsHiddenModalShow ] = useState(false);
    const [ modalCOmponent, setModalComponent ] = useState('');
    useEffect(() => {
        $('.icon').height( $('.icon').width() );

        $('.Mainscreen').width( $(window).width() + 'px' );
        $('.Mainscreen').height( ( $('.Mainscreen').width() / 16 ) * 9 + 'px' );
    }, []);

    $(window).on('resize', function() {
        $('.Mainscreen').width( $(window).width() + 'px' );
        $('.Mainscreen').height( ( $('.Mainscreen').width() / 16 ) * 9 + 'px' );
    
        $('.icon').height( $('.icon').width() );
    }); 

    let datas = [ <Lemon/>, <TopDentalClinic/>, <About/> ];

    function handledbClick(e) {
        $(e.currentTarget).removeClass("ative");
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

    function active(e) {
        $(e.currentTarget).addClass("ative");
    }

    function deactive() {
        $('[class^="app_"]').removeClass("ative");
    }

    function closeModal() {
        $('.modal').css({'animation': 'none', 'opacity': '1'});
        $('.modal').fadeOut(200, () => {
            setIsModalShow(false);
        });
        $('.modal').scrollTop(0, 0);
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
            <div className="Mainscreen">
                <div className="appField">
                    <div className="app_" data-no="0" onClick={active} onDoubleClick={handledbClick}>
                        <div className="detail">
                            <div className="icon Lemon"></div>
                            <span className="appName">Lemon Music</span>
                        </div>
                    </div>
                    <div className="app_" data-no="1" onClick={active} onDoubleClick={handledbClick_Hidden}>
                        <div className="detail">
                            <div className="icon TopDentalClinic"></div>
                            <span className="appName">광주탑치과</span>
                        </div>
                    </div>
                </div>
                <div className="MainBackground" onClick={deactive}></div>
            </div>
        </div>
    )
}

export default Main;