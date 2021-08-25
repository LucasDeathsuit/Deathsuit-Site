import React from 'react';
import SocialMedia from '../SocialMedia/SocialMedia';
import css from './mainfooter.module.css';

export default function MainFooter() {
    return (
        <div className={css.mediaIcons}>
            <SocialMedia logo="instagram_logo" alt="Instagram" link="https://instagram.com/_deathsuit"/>
            <SocialMedia logo="facebook_logo" alt="Facebook" link="https://facebook.com/deathsuit"/>
            <SocialMedia logo="youtube_logo" alt="Youtube" link="https://www.youtube.com/channel/UCbqeKL8Djio8i8tnTGlgLiQ"/>
        </div>
    )
}
