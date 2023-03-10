import messi from '../assets/messi.webp'
import styled from 'styled-components'

const BannerContainer = styled.div`
  display: flex;
  /* background-color: black; */
  position: relative;

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
  opacity: 0.8;
`

const BannerImg = styled.img`
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;

  /* background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) */
`

function Banner() {
  return <BannerContainer>
    <BannerTitle><Titre>Le monde du football à portée de clic.</Titre>
      <BannerMsg>"Les performances individuelles, ce n'est pas le plus important. On gagne et on perd en équipe." <br/>Zinedine Zidane</BannerMsg>
    </BannerTitle>
    <BannerImg src={messi} alt="photo de Messi" />
    </BannerContainer>
}

export default Banner
