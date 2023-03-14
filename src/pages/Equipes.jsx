import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import "../style/Equipe.css"


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
      color: #f1f1f1;
      display: flex;
      flex-flow: wrap;
      font-family: 'Ubuntu', 'Poppins', Courier;
      justify-content: center;
    `

// const location = useLocation();
// console.log(location)
// const idTeam = location.team.id;



    return <EquipeContainer>
       {results.map((team, index) => (
            <div className='TeamContenu'>
              {/* <div className="TeamHead"> */}
                <Link to= {{ pathname: `./Effectif/${team.team.id}` }} className='TeamLink'>
                  <div className="imgTeam">

                  <img src={team.team.logo} alt="Logo club" />
                  </div>
                  {/* <p>id : {idTeam}</p> */}
                {/* <h1>{team.team.id}</h1> */}
                {/* <div className='TeamLink'> */}
                {/* </div> */}
                {/* <p>{team.team.code}</p> */}
                  <div className="TeamInfo">
                    <h1 className='Link'>{team.team.name}</h1>
                    <p>Année : {team.team.founded}</p>
                    <p>Ville : {team.venue.city}</p>
                  </div>
                {/* <img src={team.venue.image} alt="stade" /> */}
                </Link>
              {/* </div> */}
              {/* <div className="TeamStade"> */}
                {/* <p>Stade : {team.venue.name}</p> */}
              {/* </div> */}
            </div>
           ))}
    </EquipeContainer>
  }

export default Equipes
