import styled from "styled-components";
import UpgradeBox from "../upgradebox/UpgradeBox";

const UpgradeListStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 5px;
  padding: 5px 5px;
  background-color: #6e6c6c24;
  border-radius: 20px;
  width: 15vw;
  padding: 15px;
`;

const UpgradeList = () => {
  return (
    <UpgradeListStyle>
      <UpgradeBox
        habilidade="Bubble Power"
        resumo="Click power +1"
        preco={10}
      />
      <UpgradeBox
        habilidade="Bubble Partner"
        resumo="AutoClick +1"
        preco={15}
      />
      <UpgradeBox
        habilidade="Bubble Partner"
        resumo="AutoClick +1"
        preco={10}
      />
    </UpgradeListStyle>
  );
};

export default UpgradeList;
