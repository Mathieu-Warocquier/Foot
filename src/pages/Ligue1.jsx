import styled from 'styled-components'
import Effectif from './Effectif'
import Equipes from './Equipes'
import Ligues from './Ligues'


function Ligue1() {

  return (
    <div>
      <Ligues id={61}>Ligue 1</Ligues>
      <Equipes id={61}></Equipes>
      <Effectif></Effectif>
    </div>
  )
}

export default Ligue1
