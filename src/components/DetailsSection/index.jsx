import './index.scss';
import React from 'react';
import womanWaving from '../../assets/left-illustration.png';
import womanSitting from '../../assets/croods (1).png';
import checkmark from '../../assets/iconmonstr-check-mark-4 (1)-1.svg';
import { CtaButton } from '../CtaButton';

export const DetailsSection = () => {
  return (
    <div className = "details-section">
      <div className = "details-section__image">
        <img src = {womanWaving} alt = "woman waving"/>
      </div>
      <div className = "details-section__text-content">
        <div className = "details-section__title">
          Get Cash Rewards
        </div>
        <div className = "details-section__list">
          <div className = "details-section__list-item">
            <div className = "details-section__list-title">
              <img src= {checkmark} alt=""/>
              <span>Post</span>
            </div>
            <div className = "details-section__list-item-info">
              Share the referral codes of products you already use and love. It takes 5 minutes to gather them.
            </div>
          </div>
          <div className = "details-section__list-item">
            <div className = "details-section__list-title">
              <img src= {checkmark} alt=""/>
              <span>Earn</span>
            </div>
            <div className = "details-section__list-item-info">
              Get rewarded every time someone uses one of your codes. Everyday thousands of people come here to find invites.
            </div>
          </div>
          <div className = "details-section__list-item">
            <div className = "details-section__list-title">
              <img src= {checkmark} alt=""/>
              <span>Grow</span>
            </div>
            <div className = "details-section__list-item-info">
              Explore more referral programs and promote your page to get more bonuses & discounts.
            </div>
          </div>
        </div>
        <CtaButton btnText = "Get Started - It's free." />
      </div>
      <div className = "details-section__image">
        <img src = {womanSitting} alt = "woman sitting"/>
      </div>
    </div>
  )
};
