import { useState, useEffect } from 'react';
import styled from 'styled-components'


function Ligues() {
  const [results, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://v3.football.api-sports.io/leagues?id=61", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "v3.football.api-sports.io",
  //       "x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
  //     }
  //   })
  //   .then((response) => response.json())
  //   .then((result) => {setData(result.response)})
  //   .catch((error) => console.log(error))

  //   ;},[]);

    const CardContainer = styled.div`
      color: white;
    `

  return (<CardContainer>

          {results.map((ligue, index) => (
            <div>
              <p>{ligue.league.name}</p>
              <p>{ligue.league.type}</p>
              <img src={ligue.league.logo} alt="Logo ligue 1" />
              <p>{ligue.country.name}</p>
              <p>{ligue.country.code}</p>
              <img src={ligue.country.flag} alt="drapeau France" />
            </div>
            // <ul>
            //   <li key={index + 6}>{ligue.league.name}</li>
            //   <li key={index + 1}>{ligue.league.type}</li>
            //   <li key={index + 2}>{ligue.league.logo}</li>
            //   <li key={index + 3}>{ligue.country.name}</li>
            //   <li key={index + 4}>{ligue.country.code}</li>
            //   <li key={index + 5}>{ligue.country.flag}</li>
            // </ul>
    ))}
    </CardContainer>)
}

export default Ligues
