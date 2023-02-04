import messi from '../assets/messi.webp'
import styled from 'styled-components'

const BannerContainer = styled.div`
  display: flex;
  /* background-color: black; */
`

const BannerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 70%;
  color: #F1F1F1;
  padding-left: 20px;
`
const Titre = styled.h1 `
  font-size: 60px;
  font-family: 'bespoke_stencilextrabold', 'Ubuntu', 'Poppins', Courier;
  font-weight: bolder;
  background-image: linear-gradient(45deg, #0f2e4c,#6dd06e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  margin: 0;
  text-transform: uppercase;
`

const BannerMsg = styled.p`
  font-family: 'Ubuntu', 'Courier New', Courier, monospace;
  width: 80%;
  font-size: 20px;
  font-weight: bold;
`

const BannerImg = styled.img`
  height: 300px;
  /* background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) */
`

function Banner() {
  return <BannerContainer>
    <BannerTitle><Titre>Un titre sur le foot.</Titre>
      <BannerMsg>"Les performances individuelles, ce n'est pas le plus important. On gagne et on perd en équipe." <br/>Zinedine Zidane</BannerMsg>
    </BannerTitle>
    <BannerImg src={messi} alt="photo de Messi" />
    </BannerContainer>
}

export default Banner
