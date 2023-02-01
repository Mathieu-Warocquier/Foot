import messi from '../assets/messi.webp'
import styled from 'styled-components'
import '../style/App.css';

const BannerContainer = styled.div`
  display: flex;
  background-color: black;
`

const BannerTitle = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 70%;
  color: #F1F1F1;
  font-family: 'Lobster', Courier, monospace;
  font-size: 50px;
  padding-left: 20px;
`

const BannerMsg = styled.p`
  font-size: 15px;
  font-family: 'Courier New', Courier, monospace;
`

const BannerImg = styled.img`
  height: 300px;
`



function Banner() {
  return <BannerContainer>
    <BannerTitle>Un titre sur le foot
      <BannerMsg>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque voluptatum quis, obcaecati ullam maxime enim dolorum consequatur sit mollitia deserunt.</BannerMsg>
    </BannerTitle>
    <BannerImg src={messi} alt="" />
    </BannerContainer>
}

export default Banner
