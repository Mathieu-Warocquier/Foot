import { useState, useEffect } from 'react';
import styled from 'styled-components'


function Ligues({id}) {
  const [results, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://v3.football.api-sports.io/leagues?id=${id}`, {
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
              <h1>{ligue.league.name}</h1>
              {/* <p>{ligue.league.type}</p> */}
              <img src={ligue.league.logo} alt="Logo ligue 1" />
              <p>Pays :{ligue.country.name}</p>
              {/* <p>{ligue.country.code}</p> */}
              <img src={ligue.country.flag} alt="drapeau France" />
            </div>
           ))}
    </CardContainer>)
}

export default Ligues
