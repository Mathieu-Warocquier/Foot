// import { type } from '@testing-library/user-event/dist/type';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../style/Effectif.css';
import footballeur from '../assets/footballeur.png'



// import Equipes from './Equipes';


function Effectif({idTeam}, props) {
  // const [results, setData] = useState([]);
  const [joueurs, setJoueurs] = useState([]);

  let {idLigue} = useParams();
  let {id} = useParams();
  // console.log(idLigue)
  // console.log(id)



  // const idEquipe = props.location.state.idTeam;


  //
    useEffect(() => {
      fetch(`https://v3.football.api-sports.io/players?league=${idLigue}&season=2022&team=${id}`, {
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
          {/* <h1>Joueurs de l'équipe de {joueurs[0].statistics[0].team.name}</h1> */}
          {/* <img src={joueurs[0].statistics[0].team.logo} alt="" /> */}
          <div className="headTeam">
            <div className="club">
              {joueurs.slice(0, 1).map((joueur) =>
                <p >{joueur.statistics[0].team.name}</p>
              )}

              {joueurs.slice(0, 1).map((joueur) =>
                <img src={joueur.statistics[0].team.logo} alt="" />
              )}
            </div>
            <h1 className='titre'>Effectif</h1>
          </div>

          <div className="joueurs">
            {joueurs.map((joueur) => (
              <div className="joueur">
                {/* <li >{joueur.player.name}</li> */}
                <img src={joueur.player.photo} alt="joueur de foot" className='joueurImg'/>

                <div className="infoJoueur">
                  <div className="identite">
                    <p className='lastname'>{joueur.player.lastname}</p>
                    <p >{joueur.player.firstname}</p>
                  </div>
                  {/* <p >{joueur.player.age} ans</p>
                  <p >{joueur.player.nationapty}</p>
                  <p >{joueur.player.height}</p>
                  <p >{joueur.player.weight}</p> */}
                  {/* <p >{joueur.player.birth.date}</p> */}
                  <img src={footballeur} alt="" />
                  <p >{joueur.statistics[0].games.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </EffectifPlayers>

}

export default Effectif
