import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import { BubbleSettingContext } from "../../../contexts/BubbleSettingsContext";
import Upgrade from "../../../models/Upgrade";
import BubbleColors from "../../../models/Colors";
import Bubble from "../../bubble/Bubble";
import colorPalettes from "../../../utils/colorpalettes/ColorPalettes";


const efeitoLoopBefore = keyframes`
  0% { right: 0.25rem; bottom: 0rem; }
  5% { right: 0.5rem; bottom: 0.05rem; }
  10% { right: 0.75rem; bottom: 0.1rem; }
  15% { right: 1rem; bottom: 0.15rem; }
  20% { right: 1.25rem; bottom: 0.2rem; }
  100% { right: 3rem; bottom: 2rem; }
`;

const efeitoLoopAfter = keyframes`
  0% { right: 2rem; }
  5% { right: 1.85rem; }
  100% { right: -2rem; }
`;


const UpgradeBoxStyle = styled.div<{ $colors: BubbleColors }>`
  padding: 0.5rem 2rem;
  text-transform: uppercase;
  border-radius: 50px; 
  color: #fcfcfc;
  background: ${({ $colors }) => $colors.primary}99; 
  cursor: pointer;
  transition: 0.3s ease-in-out;
  user-select: none;
  height: auto;
  position: relative;
  text-align: left;
  overflow: hidden;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2); 
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  &:hover {
    background: ${({ $colors }) => $colors.primary}cc; 
    transform: scale(1.05); 
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.3); 
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    filter: blur(8px); 
    transition: all 0.3s ease;
  }

  &::before {
    background-color: ${({ $colors }) => $colors.secondary};
    width: 3rem;
    height: 3rem;
    right: 0.5rem;
    top: 0.5rem;
    animation: ${efeitoLoopBefore} 5s linear infinite alternate;
  }

  &::after {
    background-color: ${({ $colors }) => $colors.secondary};
    width: 7rem;
    height: 7rem;
    right: 1.5rem;
    top: 1rem;
    animation: ${efeitoLoopAfter} 5s linear infinite alternate;
  }

  &:hover::after {
    animation: ${efeitoLoopAfter} 1s linear infinite alternate;
  }

  #organização {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }

  #descritivo {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  #title {
    font-size: 13px;
    font-weight: 600;
    padding: 8px 0;
    color: ${({ $colors }) => $colors.brightCenter}; 
  }

  #texto {
    font-size: 11px;
    font-weight: 500;
    padding: 0 0 8px 0;
    color: ${({ $colors }) => $colors.brightCenter}; 
  }

  #preco {
    display: flex;
    align-items: center;
    width: 50px;
    gap: 5px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ $colors }) => $colors.brightCenter}; 
  }


`;



interface UpgradeBoxProps {
  habilidade: string;
  resumo: string;
  preco: number;
}

const UpgradeBox = ({ habilidade, resumo, preco }: UpgradeBoxProps) => {
  const { bolha, setBolha } = useContext(BubbleSettingContext);

  const subirNivel = (habilidade: string) => {
    const levelUp = bolha.upgrades.find(
      (upgrade) => upgrade.nome === habilidade
    );

    if (levelUp) {
      levelUp.nivel++;
    } else {
      const novoUpgrade: Upgrade = {
        nome: habilidade,
        nivel: 1,
      };

      const novosUpgrades = [...bolha.upgrades, novoUpgrade]; 


      setBolha({ ...bolha, upgrades: novosUpgrades });
    }
  };

  return (
    <UpgradeBoxStyle
      $colors={bolha.cor}
      onClick={() => subirNivel(habilidade)}
    >
        <span style={{ position: 'relative', zIndex: 4 }}>
          <div id="organização">
            <div id="descritivo">
              <p id="title">{habilidade}</p>
              <p id="texto">{resumo}</p>
            </div>
            <p id="preco">{preco}<Bubble colors={colorPalettes.golden} size={1} speed={2}/></p>
        </div>
      </span>
    </UpgradeBoxStyle>
  );
};

export default UpgradeBox;