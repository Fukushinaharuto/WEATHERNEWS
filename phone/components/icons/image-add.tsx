// components/icons/ImageIcon.tsx
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

export default function ImageAddIcon({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* 画像フレーム */}
      <Path 
        d="M18.9984 2.99976H4.99959C3.89511 2.99976 2.99976 3.89511 2.99976 4.99959V18.9984C2.99976 20.1029 3.89511 20.9982 4.99959 20.9982H18.9984C20.1029 20.9982 20.9982 20.1029 20.9982 18.9984V4.99959C20.9982 3.89511 20.1029 2.99976 18.9984 2.99976Z" 
        stroke={color} 
        strokeWidth={1.99983}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 画像プレビュー円 */}
      <Path 
        d="M8.99951 10.9994C10.1041 10.9994 10.9995 10.104 10.9995 8.99939C10.9995 7.89482 10.1041 6.99939 8.99951 6.99939C7.89494 6.99939 6.99951 7.89482 6.99951 8.99939C6.99951 10.104 7.89494 10.9994 8.99951 10.9994Z" 
        stroke={color} 
        strokeWidth={1.99983}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* 画像斜線 */}
      <Path 
        d="M20.9982 14.9988L17.9125 11.913C17.5375 11.5381 17.0289 11.3275 16.4986 11.3275C15.9683 11.3275 15.4598 11.5381 15.0847 11.913L5.99951 20.9983" 
        stroke={color} 
        strokeWidth={1.99983}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
