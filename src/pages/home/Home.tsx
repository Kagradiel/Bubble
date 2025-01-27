import styled from 'styled-components';
import Bubble from '../../components/bubble/Bubble'
import UpgradeList from '../../components/upgrades/upgradelist/UpgradeList';
import { useContext } from 'react';
import { BubbleSettingContext } from '../../contexts/BubbleSettingsContext';
import ColorMenu from '../../components/colormenu/ColorMenu';

const HomeConfig = styled.div`
  padding: 0 10vw;
  height: 98dvh;
  display: flex;
  align-items: center;

  #middlePage{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 40dvh;
    align-items: center;
    
  }
    
`;

function Home() {

  const { bolha } = useContext(BubbleSettingContext);

  return (
    <HomeConfig>
      <section id='middlePage'>
        <ColorMenu/>
        <Bubble size={15} colors={bolha.cor} speed={2}/>
        <UpgradeList/>
      </section>
    </HomeConfig>
  )
}

export default Home