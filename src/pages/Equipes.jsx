import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'


function Equipes({id}, props) {
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
      border: 2px solid white;
      padding: 25px;
      margin: 30px;
      border-radius: 10px;
    `

// const location = useLocation();
// console.log(location)
// const idTeam = location.team.id;

    return <EquipeContainer>
       {results.map((team, index) => (
            <div>
              <Link to={`/Effectif/${team.team.id}`} idTeam={team.team.id}>
                {/* <p>id : {idTeam}</p> */}
              <h1>{team.team.id}</h1>
              <h1>{team.team.name}</h1>
              </Link>
              <p>{team.team.code}</p>
              <p>{team.team.founded}</p>
              <img src={team.team.logo} alt="Logo club" />
              {/* <p>{team.team.logo}</p> */}
              <p>{team.venue.city}</p>
              <p>{team.venue.name}</p>
              <img  src={team.venue.image} alt="" />
              <p>{team.venue.image}</p>
            </div>
           ))}
    </EquipeContainer>
  }

  export default Equipes
