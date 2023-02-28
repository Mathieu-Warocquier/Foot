// import { type } from '@testing-library/user-event/dist/type';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


function Effectif({idTeam}, props) {
  // const [results, setData] = useState([]);
  const [joueurs, setJoueurs] = useState([]);

  let {id} = useParams();
  console.log(id)

  // const idEquipe = props.location.state.idTeam;


  //
    useEffect(() => {
      fetch(`https://v3.football.api-sports.io/players?league=61&season=2022&team=${id}`, {
        // fetch(`https://v3.football.api-sports.io/players/squads?team=81`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "v3.football.api-sports.io",
          "x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
        }
      })
        .then((response) => { return response.json()})
        .then((data) => {setJoueurs(data.response)})
    }, []);

    // const stat = joueurs.statistics.team
    // console.log(stat.id)

      const EffectifPlayers = styled.div`
      color: white;
      `


      return <EffectifPlayers>
        <div>
          <h1>Joueurs de l'équipe de {joueurs[0].statistics[0].team.name}</h1>
          <h1>logo: {joueurs[0].statistics[0].team.logo}</h1>
          {joueurs.map((joueur) => (
            <ul>
              <li >{joueur.player.name}</li>
              <li >{joueur.player.age} ans</li>
            </ul>
          ))}
        </div>
      </EffectifPlayers>

}

export default Effectif

// A tester ---------->


// import React, { useState, useEffect } from 'react';

// function MonComposant() {
//   const [joueurs, setJoueurs] = useState([]);

//   useEffect(() => {
//     fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=Marseille')
//       .then((response) => response.json())
//       .then((data) => {
//         setJoueurs(data.player);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Joueurs de l'équipe de Marseille</h1>
//       <ul>
//         {joueurs.map((joueur) => (
//           <li key={joueur.idPlayer}>{joueur.strPlayer}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
