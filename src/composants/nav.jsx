import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ballon from '../assets/ballon.png'


function Nav() {

  const NavContainer = styled.nav`
  padding: 0 30px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: black; */
  `

  const Logo = styled.img`
    height: 50px;
    &:hover {
      filter: drop-shadow(0px 0px 8px #F1F1F1);
    }
  `
  const OngletsContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  const BtnLink = styled(Link)`
    color: #F1F1F1;
    font-family: 'Ubuntu', 'Poppins', Courier;
    font-weight: bold;
    font-size: 16px;
    padding: 0 3px;
    text-decoration: none;
    transition: all 200ms linear;
    &:hover {
      color: #6dd06e;
      border-left: 3px solid white;
    }
    `

  return <NavContainer>
    <Link to="/"><Logo src={ballon} alt="ballonLogo" /></Link>
    <OngletsContainer>
      <BtnLink to="/" >Accueil</BtnLink>
      <BtnLink to="/ligues" >Ligues</BtnLink>
      <BtnLink to="/effectif" >Equipes</BtnLink>
    </OngletsContainer>
  </NavContainer>
}

export default Nav
