import React, { Suspense } from 'react';
import SocialLogin from './SocialLogin';
import QZone from './Qzone';
import FindUs from './FindUs';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;