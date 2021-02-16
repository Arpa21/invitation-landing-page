import './index.scss';
import React from 'react';
import heroImage from '../../assets/hero-image.png';
import { CtaButton } from '../CtaButton';

export const HeroSection = () => {
  return (
    <div className = "hero-section">
      <div className = "hero-section__text-content">
        <div className = "hero-section__title">The Referral Community.</div>
        <div className = "hero-section__subtitle">
          Invitation is the new social network where everyone gets rewarded. Join, post all your referral links — collect rewards on auto pilot.
        </div>
        <div className = "hero-section__cta">
          <input type="email" className = "hero-section__cta-email" placeholder="Enter your email" />
          <CtaButton btnText = "Get Started - It's free." />
        </div>
      </div>

      <div className = "hero-section__image">
        <img src = {heroImage} alt = "hero"/>
      </div>
    </div>
  )
};
