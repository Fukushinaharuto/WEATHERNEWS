import Svg, { Path } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};


export default function CurrentLocationIcon({
  size,
  color,
}: Props) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path 
        d="M2.5 9.16611L18.332 1.66675L10.8326 17.4987L9.1661 10.8326L2.5 9.16611Z" 
        stroke={color} 
        strokeWidth={1.66652} 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
}