import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import PcLock from './PcLock.js';
import MobileLock from './MobileLock.js';

function Login() {

    return (
        <>
            <BrowserView>
                <PcLock/>
            </BrowserView>
            <MobileView>
                <MobileLock/>
            </MobileView>
        </>
    );
}

export default Login;