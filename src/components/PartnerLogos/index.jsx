import './index.scss';
import React from 'react';
import airbnb from '../../assets/company-1.svg';
import uber from '../../assets/company-2.svg';
import coinbase from '../../assets/company-3.svg';
import robinhood from '../../assets/company-4.svg';
import transferwise from '../../assets/company-5.png';
import n26 from '../../assets/company-6.png';

export const PartnerLogos = () => {
  return (
    <div className = "partner-logos">
      <img src = {airbnb} alt = "hero"/>
      <img src = {uber} alt = "hero"/>
      <img src = {coinbase} alt = "hero"/>
      <img src = {robinhood} alt = "hero"/>
      <img src = {transferwise} alt = "hero"/>
      <img src = {n26} alt = "hero"/>
    </div>
  )
};
