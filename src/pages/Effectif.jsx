import { useState, useEffect } from 'react';
import styled from 'styled-components';


function Effectif() {
  const [results, setData] = useState([]);

    // useEffect(() => {
    //   fetch(`https://v3.football.api-sports.io/players/squads?team=81`, {
    //     "method": "GET",
    //     "headers": {
    //       "x-rapidapi-host": "v3.football.api-sports.io",
    //       "x-rapidapi-key": "5b217cb77b612be62f69b774f415a79c"
    //     }
    //   })
    //   .then((response) => response.json())
    //   .then((result) => {setData(result.response)})
    //   .catch((error) => console.log(error))
    //   },[]);


      // console.log(typeof(results[0]))

      // const arrayIdTeams = results[0]
      // console.log(results)
      console.log(results[0])
      // console.log(arrayIdTeams["0"])

      const EffectifPlayers = styled.div`
      color: white;
      `


      // return <EffectifPlayers>
      //   Effectif
      //   {results.map((result, index) => {
      //     <p>{result[0].team.name}</p>
      //   })}
      // </EffectifPlayers>

}

export default Effectif
