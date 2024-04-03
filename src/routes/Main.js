import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import PcMain from './PcMain.js';
import MobileMain from './MobileMain.js';

function Login() {

    return (
        <>
            <BrowserView>
                <PcMain/>
            </BrowserView>
            <MobileView>
                <MobileMain/>
            </MobileView>
        </>
    );
}

export default Login;