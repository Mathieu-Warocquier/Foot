import { useParams } from 'react-router-dom';
import Equipes from './Equipes'
import Ligues from './Ligues'


function Ligue() {

  let {idLigue} = useParams();
  console.log(idLigue)

  return (
  <div>
    <Ligues id={idLigue}>Ligue 1</Ligues>
    <Equipes id={idLigue}></Equipes>
  </div>)

}

export default Ligue
