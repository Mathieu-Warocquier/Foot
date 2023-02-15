import { type } from '@testing-library/user-event/dist/type';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


function Effectif() {
  const [results, setData] = useState([]);

    useEffect(() => {
      fetch(`https://v3.football.api-sports.io/players/squads?team=81`, {
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


      // console.log(typeof(results[0]))

      // const arrayIdTeams = results[0]
      // console.log(results)
      // console.log(results[0])
      // console.log(arrayIdTeams["0"])

      const EffectifPlayers = styled.div`
      color: white;
      `
      // const effectifs = results[0]
      // console.log(effectifs)
      // console.log(typeof(effectifs))

      console.log(results[0])


      // this.state.objet.a
      // const effect = effectifs.team
      // console.log(effect)



          // this.state = results;


          // console.log(this.state)
        // render() {
        //   return <div>{this.state.objet.a}</div>;
        // }



      return <EffectifPlayers>
        Effectif

        {/* <div>{results[0].team.name}</div> */}
        {/* {results.map((result, index) => {
          <p>{result.team.name}</p>
        })} */}
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
