import './index.scss';
import React from 'react'
import { CtaButton } from '../CtaButton';
import signupImage from '../../assets/signup-image.png';
import googleButton from '../../assets/Google-Button.svg';

export const MainCtaSection = () => {
  return (
    <div className = "main-cta-section">
      <div className = "main-cta-section__text-content">
        <div className = "main-cta-section__title">Why don't you post your links here too?</div>
        <div className = "main-cta-section__subtitle">
          <ul className="main-cta-section__subtitle-list">
            <li className="main-cta-section__subtitle-list-item">List the products you ❤️ love.</li>
            <li className="main-cta-section__subtitle-list-item">Get 🎉 rewarded.</li>
          </ul>
        </div>
        <div className = "main-cta-section__cta">
          <button className = "main-cta-section__google-button">
            <img src = {googleButton} alt = "googleButton"/>
            Sign in with Google
          </button>
          <CtaButton btnText = "Explore Features" />
        </div>
      </div>
      <div>
        <img src = {signupImage} className = "main-cta-section__image" alt = "signup"/>
      </div>
    </div>
  )
};
