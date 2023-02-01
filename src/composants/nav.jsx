import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ballon from '../assets/ballon.png'
import '../style/App.css';

function Nav() {

  const NavContainer = styled.nav`
  padding: 0 30px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
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

  const BtnNav = styled.a`
    color: #F1F1F1;
    font-weight: bold;
    font-size: 16px;
    padding: 0 3px;
    transition: all 200ms linear;
    cursor: pointer;
    &:hover {
      color: white;
      border-left: 3px solid white;
      font-size: 17px;
    }
  `

  return <NavContainer>
    <Link to="/"><Logo src={ballon} alt="ballonLogo" /></Link>
    <OngletsContainer>
      <BtnNav className='itemNav'>Acceuil</BtnNav>
      <BtnNav className='itemNav'>Ligues</BtnNav>
      <BtnNav className='itemNav'>Equipes</BtnNav>
    </OngletsContainer>
  </NavContainer>
}

export default Nav
