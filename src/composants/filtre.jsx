import styled from "styled-components"
import ItemFiltre from "./ItemFiltre";
import ligue1 from '../assets/ligue1.png'
import PL from '../assets/PL.png'
import liga from '../assets/liga.png'
import serieA from '../assets/serieA.png'
import bundes from '../assets/bundes.png'

const FiltreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: #F1F1F1;
  padding-bottom: 15px;
`

const FiltreItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`

function Filtre() {
  return <FiltreContainer>
          <h1>Choisis ta ligue</h1>
          <FiltreItems>
            <ItemFiltre logo={ligue1}>Ligue 1</ItemFiltre>
            <ItemFiltre logo={PL}>Premier League</ItemFiltre>
            <ItemFiltre logo={liga}>Liga</ItemFiltre>
            <ItemFiltre logo={serieA}>Serie A</ItemFiltre>
            <ItemFiltre logo={bundes}>Bundesliga</ItemFiltre>
          </FiltreItems>
        </FiltreContainer>
}

export default Filtre
