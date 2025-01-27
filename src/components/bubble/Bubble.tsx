import styled, { keyframes } from "styled-components";
import BubbleColors from "../../models/Colors";

const createBouncingKeyframes = (size: number) => keyframes`
  0% {
    height: ${size * 0.9}rem;
    width: ${size * 0.85}rem;
  }
  100% {
    height: ${size * 0.8}rem;
    width: ${size * 0.95}rem;
  }
`;

const BubbleConfig = styled.div<{ $colors: BubbleColors; $size: number, $speed: number }>`
  #base_circle {
    position: relative;
    height: ${({ $size }) => `${$size}rem`};
    width: ${({ $size }) => `${$size}rem`};
    background-image: radial-gradient(
      circle at 0 100%,
      ${({ $colors }) => $colors.primary} 13%,
      ${({ $colors }) => $colors.secondary} 20%,
      ${({ $colors }) => $colors.tertiary} 50%,
      ${({ $colors }) => $colors.quaternary} 80%,
      ${({ $colors }) => $colors.quinary}
    );
    border-radius: 800px;
    display: flex;
    justify-content: end;
    animation: ${({ $size }) => createBouncingKeyframes($size)} ${({$speed}) => `${$speed}s`} ease-in-out infinite alternate;
  }

  #base_circle:hover {
    animation: ${({ $size }) => createBouncingKeyframes($size)} ${({$speed}) => `${$speed * 0.35}s`} ease-in-out infinite alternate;
  }

  #bright {
    height: ${({ $size }) => `${$size * 0.2857}rem`};
    width: ${({ $size }) => `${$size * 0.2857}rem`};
    background-color: ${({ $colors }) => $colors.brightCenter};
    background-image: radial-gradient(
      circle at 0 100%,
      ${({ $colors }) => $colors.brightGradientStart} 35%,
      #fff
    );
    border-radius: 800px;
    margin: ${({ $size }) => `${$size * 0.1143}rem`}
      ${({ $size }) => `${$size * 0.1143}rem`} 0 0;
    opacity: 0.5;
  }

`;

interface BubbleProps {
  size: number;
  colors: BubbleColors;
  speed: number;
}

const Bubble = ({ size, colors, speed }: BubbleProps) => {
  return (
    <BubbleConfig $colors={colors} $size={size} $speed={speed}>
      <div id="base_circle">
        <div id="bright" />
      </div>
    </BubbleConfig>
  );
};

export default Bubble;
