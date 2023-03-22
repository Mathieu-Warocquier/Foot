// import { type } from '@testing-library/user-event/dist/type';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../style/Effectif.css';
import footballeur from '../assets/football.png'



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
              // <div className="card" style={{background: `url(${joueur.player.photo})`}}>
                <div className="card" style={Object.assign({background: `url(${joueur.player.photo})`}, {backgroundRepeat: 'no-repeat', backgroundPosition: 'center'})}>

                {/* <img src={joueur.player.photo} alt="joueur de foot" className='joueurImg'/> */}

                <div className="card_body">
                  <h2 className="card_title">{joueur.player.lastname}</h2>

                    {/* <p className='lastname'>{joueur.player.lastname}</p> */}
                    <p >{joueur.player.firstname}</p>


                  <img src={footballeur} alt=""/>
                  <p >{joueur.statistics[0].games.position}</p>
                </div>
              </div>
            ))}
          </div>


        {/* <article className="card">
            <div className="card_body">
              <h2 className="card_title">
                Pedri
              </h2>
              <p>FC Barcelone Milieu ...</p>
            </div>
          </article> */}

        </div>
      </EffectifPlayers>

}


export default Effectif
