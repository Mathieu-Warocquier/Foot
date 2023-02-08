import { useState, useEffect } from 'react';
import styled from 'styled-components'


function Equipes() {
  const [results, setData] = useState([]);

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/leagues?id=61`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
      }
    })
    .then((response) => console.log(response.json()))
    // .then((result) => {setData(result.response)})
    // .catch((error) => console.log(error))


//     .then((response) => response.json()
//     .then(({ surveyData }) => console.log(surveyData))
//     .catch((error) => console.log(error))
// )
    },[]);

    const EquipeContainer = styled.div`
    color: white;
  `

    return <EquipeContainer>
      coucou
       {results.map((team, index) => (
            <div>
              <h1>{team.team.name}</h1>
            </div>
           ))}
    </EquipeContainer>
  }

  export default Equipes
