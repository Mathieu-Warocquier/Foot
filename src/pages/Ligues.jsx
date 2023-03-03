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
      color: white;
      border: 2px solid white;
      padding: 25px;
      margin: 30px;
      border-radius: 10px;
      display: flex;
      font-family: 'bespoke_stencilextrabold', 'Ubuntu', 'Poppins', Courier;
    `

  return (<CardContainer>
          {results.map((ligue, index) => (
            <div className='ligueContenu'>
              <h1>{ligue.league.name}</h1>
              {/* <p>{ligue.league.type}</p> */}
              <img src={ligue.league.logo} alt="Logo ligue 1" />
              <div className='pays'>
                <p>{ligue.country.name}</p>
                {/* <p>{ligue.country.code}</p> */}
                <img src={ligue.country.flag} alt="drapeau France" className='LigueImg' />
              </div>
            </div>
           ))}
    </CardContainer>)
}

export default Ligues
