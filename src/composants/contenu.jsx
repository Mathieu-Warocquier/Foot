import styled from 'styled-components'
import { Link } from 'react-router-dom'
import "../style/contenu.css"
import ligue1 from '../assets/ligue1.png'
import PL from '../assets/PL.png'
import liga from '../assets/liga.png'
import serieA from '../assets/serieA.png'
import bundes from '../assets/bundes.png'
import ItemContenu from './ItemContenu'
import HistoireLigue1 from './Histoires/histoireL1'
import HistoirePL from './Histoires/histoirePL'
import HistoireLiga from './Histoires/histoireLiga'
import HistoireSerieA from './Histoires/histoireSerieA'
import HistoireBundes from './Histoires/histoireBundes'

const ContenuContainer = styled.div`
  /* background-color: black; */
  display: flex;
  flex-direction: column;
  color: #F1F1F1;
  padding: 15px 30px;
`

function ContenuHome() {

  const Chemins = [61, 39, 140, 135, 78]

  return (
  <ContenuContainer>
    <h1 className='titreContainer'>Description</h1>

    {/* <Link to="/ligue1"> */}
      <ItemContenu chemin="61" logo={ligue1} ligue={"Ligue 1"}>
        <HistoireLigue1 />
      </ItemContenu>
    {/* </Link> */}
      <ItemContenu chemin="PL" logo={PL} ordre="type2" ligue={"Premier League"}>
        <HistoirePL />
      </ItemContenu>
      <ItemContenu chemin="liga" logo={liga} ligue={"Liga"}>
        <HistoireLiga />
      </ItemContenu>
      <ItemContenu chemin="seriea" logo={serieA} ordre="type2" ligue={"Série A"}>
        <HistoireSerieA />
      </ItemContenu>
      <ItemContenu chemin="bundesliga" logo={bundes} ligue={"bundesliga"}>
        <HistoireBundes />
      </ItemContenu>
  </ContenuContainer>
  )
}

export default ContenuHome
