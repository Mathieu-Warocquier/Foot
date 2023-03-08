import styled from "styled-components"
import { Link } from 'react-router-dom'
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
  /* background-color: black; */
  color: #F1F1F1;
  padding: 64px 0;
`

const FiltreItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`
const Chemins = [61, 39, 140, 135, 78]


function Filtre() {
  return <FiltreContainer>
          <FiltreItems>
            <Link to={`/ligue/${Chemins[0]}`}><ItemFiltre logo={ligue1}>Ligue 1</ItemFiltre></Link>
            <Link to={`/ligue/${Chemins[1]}`}><ItemFiltre logo={PL}>Premier League</ItemFiltre></Link>
            <Link to={`/ligue/${Chemins[2]}`}><ItemFiltre logo={liga}>Liga</ItemFiltre></Link>
            <Link to={`/ligue/${Chemins[3]}`}><ItemFiltre logo={serieA}>Serie A</ItemFiltre></Link>
            <Link to={`/ligue/${Chemins[4]}`}><ItemFiltre logo={bundes}>Bundesliga</ItemFiltre></Link>
          </FiltreItems>
        </FiltreContainer>
}

export default Filtre
