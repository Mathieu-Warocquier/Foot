import { useState, useEffect } from 'react';
import styled from 'styled-components'


function Equipes({id}) {
  const [results, setData] = useState([]);

  const aujd = new Date();
  const année = aujd.getFullYear() - 1;

  useEffect(() => {
    fetch(`https://v3.football.api-sports.io/teams?league=${id}&season=${année}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
      }
    })
    .then((response) => response.json())
    .then((result) => {setData(result.response)})
    .catch((error) => console.log(error))
    },[]);

    const EquipeContainer = styled.div`
    color: white;
  `

    return <EquipeContainer>
      coucou
       {results.map((team, index) => (
            <div>
              <h1>{team.team.name}</h1>
              <p>{team.team.code}</p>
              <p>{team.team.founded}</p>
              <p>{team.team.logo}</p>
              <p>{team.venue.city}</p>
              <p>{team.venue.name}</p>
              <p>{team.venue.image}</p>
            </div>
           ))}
    </EquipeContainer>
  }

  export default Equipes
