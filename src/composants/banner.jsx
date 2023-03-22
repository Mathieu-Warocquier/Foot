import messi from '../assets/messi.webp'
import footimg from '../assets/footfoot.webp'
import styled from 'styled-components'

const BannerContainer = styled.div`
 background-size: cover;
  background-position: center;
  padding: 150px 150px;
  height: 460px;
`

const BannerTitle = styled.h1`
  margin: 0;
  color: white;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
  font-size: 32px;
  font-weight: bold;
`
// const Titre = styled.h1 `
//   font-size: 60px;
//   font-family: 'bespoke_stencilextrabold', 'Ubuntu', 'Poppins', Courier;
//   font-weight: bolder;
//   background-image: linear-gradient(45deg, #0f2e4c,#6dd06e);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   -moz-background-clip: text;
//   -moz-text-fill-color: transparent;
//   margin: 0;
//   text-transform: uppercase;
// `

const BannerMsg = styled.p`
 font-size: 20px;
  color: white;
  opacity: .7;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
`

// const BannerImg = styled.img`
//   height: 300px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: -1;

//   /* background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)) */
// `

function Banner() {
  // const duraction = '--duration: 1s';
  // let monAutreVariable = 'autre valeur';



  return <BannerContainer style={{backgroundImage: `url(${footimg})`}}>
    {/* <h1 class="title" style={duraction}>
    <span style="--delay: 0.5s">Gaïabé Warocquier</span>
    <span style="--delay: 0.8s">chat et chat.</span>
    </h1> */}


          <BannerTitle>Titre du site de foot </BannerTitle>
          <BannerMsg>Pour les passionnés du ballon.</BannerMsg>
        </BannerContainer>




  // <BannerContainer>
  //   <BannerTitle><Titre>Le monde du football à portée de clic.</Titre>
  //     <BannerMsg>"Les performances individuelles, ce n'est pas le plus important. On gagne et on perd en équipe." <br/>Zinedine Zidane</BannerMsg>
  //   </BannerTitle>
  //   <BannerImg src={messi} alt="photo de Messi" />
  //   </BannerContainer>




}

export default Banner
