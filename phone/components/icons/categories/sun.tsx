// components/icons/LocationIcon.tsx
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

export default function SunIcon({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      {/* 中心円 */}
      <Path 
        d="M13.9992 18.6659C16.5765 18.6659 18.6659 16.5765 18.6659 13.9992C18.6659 11.4219 16.5765 9.33252 13.9992 9.33252C11.4219 9.33252 9.33252 11.4219 9.33252 13.9992C9.33252 16.5765 11.4219 18.6659 13.9992 18.6659Z" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 上矢印 */}
      <Path 
        d="M13.9988 2.33325V4.66659" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 下矢印 */}
      <Path 
        d="M13.9988 23.3313V25.6646" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 左上斜め */}
      <Path 
        d="M5.75122 5.75122L7.39622 7.39622" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 右下斜め */}
      <Path 
        d="M20.6016 20.6016L22.2466 22.2466" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 左横矢印 */}
      <Path 
        d="M2.33325 13.9988H4.66659" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 右横矢印 */}
      <Path 
        d="M23.3313 13.9988H25.6646" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 左下斜め */}
      <Path 
        d="M7.39622 20.6016L5.75122 22.2466" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 右上斜め */}
      <Path 
        d="M22.2466 5.75122L20.6016 7.39622" 
        stroke={color} 
        strokeWidth={2.33313}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
