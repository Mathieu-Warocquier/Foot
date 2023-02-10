import "../style/nav.css"
import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
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

    const Ligues = ["Ligue 1", "Premier League", "Liga" , "Serie A","Bundesliga"]
    const Chemins = ["ligue1", "PL", "liga", "seriea", "bundesliga"]

    const [open, setOpen] = useState(false)

    useEffect(() => {
      let handler = (e) => {
        if(!menuRef.current.contains(e.target)) {
          setOpen(false);
        };
      };
      document.addEventListener("mousedown", handler)
    })
    let menuRef = useRef();
    // const imgRef = useRef();


    // window.addEventListener('click', (e) => {
    //   console.log(e.target !== menuRef.current && e.target !== imgRef.current)
      // {
      //   setOpen(false);
      // }
    // });

  return <NavContainer>
    <Link to="/"><Logo src={ballon} alt="ballonLogo" /></Link>
    <OngletsContainer>
      <BtnLink to="/" >Accueil</BtnLink>
      <div className="btnNav" ref={menuRef}>
        <p className="titreNav" onClick={() => setOpen(!open)}>Ligues</p>
        {open &&
        <div>
          <ul className={"dropdownMenu"}>
              <li className="dropdownListe" onClick={() => setOpen(false)}><Link to={`/${Chemins[0]}`} >{Ligues[0]}</Link></li>
              <li className="dropdownListe" onClick={() => setOpen(false)}><Link to={`/${Chemins[1]}`} >{Ligues[1]}</Link></li>
              <li className="dropdownListe" onClick={() => setOpen(false)}><Link to={`/${Chemins[2]}`} >{Ligues[2]}</Link></li>
              <li className="dropdownListe" onClick={() => setOpen(false)}><Link to={`/${Chemins[3]}`} >{Ligues[3]}</Link></li>
              <li className="dropdownListe" onClick={() => setOpen(false)}><Link to={`/${Chemins[4]}`} >{Ligues[4]}</Link></li>
          </ul>
        </div>
        }
      </div>
      <BtnLink to="/effectif" >Equipes</BtnLink>
    </OngletsContainer>
  </NavContainer>
}

export default Nav


//  chemin="ligue1"
//  chemin="PL"
//  chemin="liga"
//  chemin="seriea"
//  chemin="bundesliga"
