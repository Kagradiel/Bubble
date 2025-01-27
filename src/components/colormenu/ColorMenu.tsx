import styled from "styled-components";
import colorPalettes from "../../utils/colorpalettes/ColorPalettes";
import Bubble from "../bubble/Bubble";
import BubbleColors from "../../models/Colors";
import { useContext } from "react";
import { BubbleSettingContext } from "../../contexts/BubbleSettingsContext";

const ColorMenuStyle = styled.section`
  display: flex;
  flex-direction: column;
  width: 10vw;
`;

const ColorMenu = () => {
  const { setBolha } = useContext(BubbleSettingContext);

  function handleColorChange(color: BubbleColors) {
    setBolha((prevBolha) => ({ ...prevBolha, cor: color }));
  }

  return (
    <ColorMenuStyle>
      <div onClick={() => handleColorChange(colorPalettes.cool)}>
        <Bubble size={4.2} colors={colorPalettes.cool} speed={1.3} />
      </div>
      <div onClick={() => handleColorChange(colorPalettes.default)}>
        <Bubble size={4.1} colors={colorPalettes.default} speed={1.1} />
      </div>
      <div onClick={() => handleColorChange(colorPalettes.nature)}>
        <Bubble size={4.3} colors={colorPalettes.nature} speed={1.4} />
      </div>
      <div onClick={() => handleColorChange(colorPalettes.pastel)}>
        <Bubble size={4.4} colors={colorPalettes.pastel} speed={1.8} />
      </div>
      <div onClick={() => handleColorChange(colorPalettes.warm)}>
        <Bubble size={4.6} colors={colorPalettes.warm} speed={2} />
      </div>
    </ColorMenuStyle>
  );
};

export default ColorMenu;
