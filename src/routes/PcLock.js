import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import $ from 'jquery';
import './Login.css'
import './LoadingSpinner.css'
import Main from './Main.js';

const LoggingIn = () => {
    const navigate = useNavigate();
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        const fadeOutInterval = setInterval(() => {
            $('.screen').addClass('fadeOutStatics');
        }, 2000);

        return () => clearInterval(fadeOutInterval);
    }, [])

    useEffect(() => {
        const loggedInInterval = setInterval(() => {
            setIsLoggedIn(true);
        }, 3000);

        return () => clearInterval(loggedInInterval);
    }, [])

    useEffect(() => {
        if ( isLoggedIn ) {
            navigate('/Main');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="welcome deSelect">
            <div className="welcomeContainer">
                <img src="/icon/userIco.png" alt="userIcon"></img>
                <div className="loading">
                    <div className="circles">
                        <div className="circle1">
                            <div className="dot"></div>
                        </div>
                        <div className="circle2">
                            <div className="dot"></div>
                        </div>
                        <div className="circle3">
                            <div className="dot"></div>
                        </div>
                        <div className="circle4">
                            <div className="dot"></div>
                        </div>
                        <div className="circle5">
                            <div className="dot"></div>
                        </div>
                    </div>
                    <span>환영합니다.</span>
                </div>
            </div>
            <Routes>
                <Route path="/Main" element={<Main />} />
            </Routes>
        </div>
    )
};

function PcLock() {
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
        $('.screen').width( $(window).width() + 'px' );
        $('.screen').height( ( $('.screen').width() / 16 ) * 9 + 'px' );
    }, []);

    $(window).on('resize', function() {
        $('.screen').width( $(window).width() + 'px' );
        $('.screen').height( ( $('.screen').width() / 16 ) * 9 + 'px' );
    }); 

    const handleKeyPress = e => {
        if (e.key === 'Enter' || e.key === 'ArrowUp') {
            $('.background').addClass("blur");
            $('.lockScreen').addClass('fadeOutStatics').animate({ top: '-100%' }, function() {
                $('.lockScreen').css('display', 'none');
                setIsEntered(true);
            });
        }
    }

    setInterval(() => {
        window.addEventListener('keydown', handleKeyPress);
    }, 1500)

    return (
        <div className="bg">
            <div className="screen">
                {isEntered && <LoggingIn />}
                <div className="lockScreen">
                    <span className="clock deSelect"></span>
                    <br />
                    <span className="date deSelect"></span>
                    <p className="alert deSelect">Enter를 눌러 로그인하세요.</p>
                </div>
                <div className="background"></div>
            </div>
        </div>
    );
}

export default PcLock;