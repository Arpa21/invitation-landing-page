import './index.scss';
import React from 'react'

export const CtaButton = ({ btnText }) => {
  return (
    <button type="button" className = "cta-button">
      {btnText}
    </button>
  )
};
