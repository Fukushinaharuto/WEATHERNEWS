// components/icons/UserGroupIcon.tsx
import React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

interface Props {
  size?: number;
  color?: string;
}

export default function HelperIcon({
  size = 16,
  color = '#155DFC',
}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Defs>
        <ClipPath id="clip0_559_335">
          <Rect width="15.9912" height="15.9912" fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_559_335)">
        <Path
          d="M10.6607 13.9923V12.6597C10.6607 11.9529 10.3799 11.275 9.88012 10.7751C9.38029 10.2753 8.70239 9.99451 7.99553 9.99451H3.99772C3.29087 9.99451 2.61296 10.2753 2.11314 10.7751C1.61332 11.275 1.33252 11.9529 1.33252 12.6597V13.9923"
          stroke={color}
          strokeWidth={1.3326}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.99675 7.32931C7.4687 7.32931 8.66195 6.13606 8.66195 4.66411C8.66195 3.19215 7.4687 1.9989 5.99675 1.9989C4.5248 1.9989 3.33154 3.19215 3.33154 4.66411C3.33154 6.13606 4.5248 7.32931 5.99675 7.32931Z"
          stroke={color}
          strokeWidth={1.3326}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.6586 13.9923V12.6597C14.6581 12.0692 14.4616 11.4956 14.0998 11.0288C13.738 10.5621 13.2314 10.2288 12.6597 10.0811"
          stroke={color}
          strokeWidth={1.3326}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.6606 2.08554C11.2339 2.23233 11.7421 2.56574 12.1049 3.03323C12.4678 3.50071 12.6648 4.07567 12.6648 4.66746C12.6648 5.25925 12.4678 5.83421 12.1049 6.30169C11.7421 6.76917 11.2339 7.10259 10.6606 7.24938"
          stroke={color}
          strokeWidth={1.3326}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
}
