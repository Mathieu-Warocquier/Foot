import { useState, useEffect } from 'react';
import styled from 'styled-components'
import "../style/ligue.css"


function Ligues({id}) {
  const [results, setData] = useState([]);

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/leagues?id=${id}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
      }
    })
    .then((response) => response.json())
    .then((result) => {setData(result.response)})
    .catch((error) => console.log(error))
    ;},[]);

    const CardContainer = styled.div`
      color: #F1F1F1;
      color: black;
      background-color: #1717175e;
      backdrop-filter: blur(20px);
      border: 1px solid #4e4e4e;
      height: 230px;
      position: sticky;
      /* position: relative; */
      top: 0px;
      margin-top: 100px;
      padding: 25px 75px;
      margin: 30px;
      border-radius: 50px 0 50px 0;
      display: flex;
      font-family: 'bespoke_stencilextrabold', 'Ubuntu', 'Poppins', Courier;
      z-index: 5;
    `

  return (<CardContainer>
          {results.map((ligue, index) => (
            <div className='ligueContenu'>
              {/* <p>{ligue.league.type}</p> */}
                <div className="borderImg">
                  <img src={ligue.league.logo} alt="Logo ligue 1" />
                </div>
              <div className='pays'>
                  <h1>{ligue.league.name}</h1>
                {/* <p>{ligue.country.name}</p> */}
                {/* <p>{ligue.country.code}</p> */}
                <img src={ligue.country.flag} alt="drapeau France" className='LigueImg' />
              </div>
            </div>
           ))}
    </CardContainer>)
}

export default Ligues
