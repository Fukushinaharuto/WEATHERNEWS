// components/icons/ChevronDownIcon.tsx
import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

export default function ArrowRightIcon({
  size,
  color,
}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path 
        d="M6.74939 13.4995L11.2494 8.99951L6.74939 4.49951" 
        stroke={color} 
        strokeWidth={1.49987}
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}