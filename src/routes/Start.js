import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './Start.css';

function Start() {
    return (
        <div className="mainText deSelect">
            <span className="layer">
                <span>안녕하세요.</span>
                <span>업데이트가 완료되었습니다.</span>
                <span>메인으로 이동합니다.</span>
            </span>
        </div>
    )
}

export default Start;