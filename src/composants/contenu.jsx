import styled from 'styled-components'
import "../style/contenu.css"
import ligue1 from '../assets/ligue1.png'
import PL from '../assets/PL.png'
import liga from '../assets/liga.png'
import serieA from '../assets/serieA.png'
import bundes from '../assets/bundes.png'
import ItemContenu from './ItemContenu'

const ContenuContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  color: #F1F1F1;

`

function ContenuHome() {
  return (
  <ContenuContainer>
    <h1>Description</h1>
      <ItemContenu logo={ligue1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus laudantium aliquid explicabo eum nihil!</ItemContenu>
      <ItemContenu logo={PL}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus laudantium aliquid explicabo eum nihil!</ItemContenu>
      <ItemContenu logo={liga}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus laudantium aliquid explicabo eum nihil!</ItemContenu>
      <ItemContenu logo={serieA}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus laudantium aliquid explicabo eum nihil!</ItemContenu>
      <ItemContenu logo={bundes}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus laudantium aliquid explicabo eum nihil!</ItemContenu>

  </ContenuContainer>
  )
}

export default ContenuHome
