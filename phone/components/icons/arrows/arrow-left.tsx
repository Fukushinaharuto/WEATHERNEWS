// components/icons/ChevronUpIcon.tsx
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

export default function ArrowLeftIcon({ size, color }: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M12.4994 14.9995L7.49939 9.99951L12.4994 4.99951" 
        stroke={color} 
        strokeWidth={1.66652}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}
