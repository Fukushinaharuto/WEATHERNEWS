// components/icons/ThermometerIcon.tsx
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

export default function RainIcon({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {/* 温度計本体 */}
      <Path 
        d="M25.6646 13.9988C25.3493 11.1252 23.9845 8.46898 21.8317 6.53948C19.679 4.60999 16.8898 3.54297 13.9989 3.54297C11.108 3.54297 8.31885 4.60999 6.1661 6.53948C4.01335 8.46898 2.64852 11.1252 2.33325 13.9988H25.6646Z" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 温度上昇線 */}
      <Path 
        d="M13.9988 13.9988V23.3321C13.9988 23.951 14.2446 24.5444 14.6822 24.982C15.1198 25.4196 15.7133 25.6654 16.3321 25.6654C16.951 25.6654 17.5444 25.4196 17.982 24.982C18.4196 24.5444 18.6654 23.951 18.6654 23.3321" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 下部温度目盛り */}
      <Path 
        d="M13.9988 2.33301V3.49967" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
