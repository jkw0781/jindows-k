import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import './MobileLogin.css'
import './Login.css'
import './LoadingSpinner.css'
import Main from './Main.js';

const LoggingIn = () => {
    const navigate = useNavigate();
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        $('.MobileScreen').addClass('fadeOutStatics');
    }, [])

    useEffect(() => {
        const loggedInInterval = setInterval(() => {
            setIsLoggedIn(true);
        }, 500);

        return () => clearInterval(loggedInInterval);
    }, [])

    useEffect(() => {
        if ( isLoggedIn ) {
            console.log('d')
            navigate('/Main');
        }
    }, [isLoggedIn, navigate]);

    return (
        <Routes>
            <Route path="/Main" element={<Main />} />
        </Routes>
    )
};

function MobileLock() {
    const [ time, setTIme ] = useState(new Date());
    const [ isEntered, setIsEntered ] = useState(false);

    useEffect(() => {
        setTIme(new Date());
        const minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
        $('.clock').text(time.getHours()
                        + ":"
                        + minute)
    }, []);

    useEffect(() => {
        const c = setInterval(() => {
            setTIme(new Date());
            const minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
            $('.clock').text(time.getHours()
                            + ":"
                            + minute)
            $('.date').text( ( time.getMonth() + 1 )
                            + "월"
                            + time.getDate()
                            + "일" )
        }, 1000);

        return (() => clearInterval(c));
    }, [time]);

    useEffect(() => {
        $('.MobileScreen').width( $(window).width() + 'px' );
        $('.MobileScreen').height( $(window).height() + 'px' );
    }, []);

    $(window).on('resize', function() {
        $('.MobileScreen').width( $(window).width() + 'px' );
        $('.MobileScreen').height( $(window).height() + 'px' );
    }); 

    const handleScreenTouch = e => {
        if (e.type === 'touchstart') {
            $('.Mobilebackground').addClass("blur");
            $('.MobilelockScreen').addClass('fadeOutStatics').animate({ top: '-100%' }, function() {
                $('.MobilelockScreen').css('display', 'none');
                setIsEntered(true);
            });
        };
    };
    
    return (
        <div className="bg">
            <div className="MobileScreen">
                {isEntered && <LoggingIn />}
                <div className="MobilelockScreen" onTouchStart={ handleScreenTouch }>
                    <span className="clock deSelect"></span>
                    <br />
                    <span className="date deSelect"></span>
                    <p className="alert deSelect">화면을 터치하세요.</p>
                </div>
                <div className="Mobilebackground"></div>
            </div>
        </div>
    );
}

export default MobileLock;