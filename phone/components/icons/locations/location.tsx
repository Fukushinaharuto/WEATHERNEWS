// components/icons/LocationIcon.tsx
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

type Props = {
  size: number;
  color: string;
};

export default function LocationIcon({
  size,
  color,
}: Props) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G clipPath="url(#clip0)">
        <Path
          d="M13.3325 6.66625C13.3325 9.99464 9.64015 13.461 8.40026 14.5316C8.28475 14.6184 8.14415 14.6654 7.99963 14.6654C7.85511 14.6654 7.7145 14.6184 7.59899 14.5316C6.3591 13.461 2.66675 9.99464 2.66675 6.66625C2.66675 5.25189 3.2286 3.89545 4.22871 2.89534C5.22882 1.89523 6.58526 1.33337 7.99963 1.33337C9.41399 1.33337 10.7704 1.89523 11.7705 2.89534C12.7706 3.89545 13.3325 5.25189 13.3325 6.66625Z"
          stroke={color}
          strokeWidth={1.33322}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.99951 8.66626C9.10408 8.66626 9.99951 7.77083 9.99951 6.66626C9.99951 5.56169 9.10408 4.66626 7.99951 4.66626C6.89494 4.66626 5.99951 5.56169 5.99951 6.66626C5.99951 7.77083 6.89494 8.66626 7.99951 8.66626Z"
          stroke={color}
          strokeWidth={1.33322}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width={15.9986} height={15.9986} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
