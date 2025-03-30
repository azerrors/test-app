import React from 'react';
import { IconProps } from '@/assets/icons/HomeIcon';

export const CheckMarkIcon = ({ color }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="35px"
    height="35px"
    fill={color}
    viewBox="0 0 50 50"
  >
    <path d="M25,2C12.318,2,2,12.318,2,25c0,12.683,10.318,23,23,23c12.683,0,23-10.317,23-23C48,12.318,37.683,2,25,2z M35.827,16.562	L24.316,33.525l-8.997-8.349c-0.405-0.375-0.429-1.008-0.053-1.413c0.375-0.406,1.009-0.428,1.413-0.053l7.29,6.764l10.203-15.036	c0.311-0.457,0.933-0.575,1.389-0.266C36.019,15.482,36.138,16.104,35.827,16.562z"></path>
  </svg>
);
