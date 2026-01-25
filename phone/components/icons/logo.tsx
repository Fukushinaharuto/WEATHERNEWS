// components/icons/CloudIcon.tsx
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

export default function LogoIcon({
  size,
  color,
}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <Path 
        d="M39.9966 6.66602V13.3327" 
        stroke={color} 
        strokeWidth={6.6661}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M16.4319 16.4319L21.1319 21.1319" 
        stroke={color} 
        strokeWidth={6.6661}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M66.6609 39.9966H73.3276" 
        stroke={color} 
        strokeWidth={6.6661}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M63.5616 16.4319L58.8616 21.1319" 
        stroke={color} 
        strokeWidth={6.6661}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M53.1521 42.1629C53.5623 39.6782 53.2604 37.128 52.2812 34.8077C51.302 32.4875 49.6857 30.492 47.6193 29.0523C45.5529 27.6127 43.1211 26.7877 40.6053 26.673C38.0895 26.5583 35.5926 27.1585 33.4038 28.4041" 
        stroke={color} 
        strokeWidth={6.6661}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M43.3296 73.3271H23.3313C20.1782 73.3264 17.0899 72.4312 14.4252 70.7455C11.7605 69.0598 9.62867 66.6526 8.27739 63.8037C6.9261 60.9547 6.41079 57.7809 6.79129 54.6508C7.17179 51.5207 8.4325 48.5627 10.427 46.1205C12.4215 43.6783 15.0679 41.852 18.0589 40.8537C21.0499 39.8555 24.2627 39.7263 27.3241 40.4811C30.3856 41.2359 33.1702 42.8438 35.3543 45.118C37.5385 47.3922 39.0327 50.2393 39.6633 53.3288H43.3296C45.9816 53.3288 48.5249 54.3823 50.4001 56.2575C52.2753 58.1327 53.3288 60.676 53.3288 63.3279C53.3288 65.9799 52.2753 68.5232 50.4001 70.3984C48.5249 72.2736 45.9816 73.3271 43.3296 73.3271Z" 
        stroke={color} 
        strokeWidth={6.6661}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
