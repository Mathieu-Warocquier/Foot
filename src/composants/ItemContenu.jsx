import { Link } from 'react-router-dom'


function ItemContenu({logo, ligue, ordre, chemin, children}) {

  if ((ordre) === "type2") {
    return (
    <div className="ContenuDescription secondType">
      <div className="imageBorder">
            <div className="imageBorder2">
              <img className='ContenuImg' src={logo} alt="logo de la ligue" />
            </div>
          </div>
          <div className='ContenuTexte secondTexte'>
           <h1 className="titreContenu">{ligue}</h1>
            <p >{children}</p>
            <Link to={`/${chemin}`} className="BtnContenu secondeBtn">Par ici</Link>
          </div>
    </div>
    )
  }
  else {
    return (
    <div className="ContenuDescription">
      <div className="imageBorder">
            <div className="imageBorder2">
              <img className='ContenuImg' src={logo} alt="logo de la ligue" />
            </div>
          </div>
          <div className='ContenuTexte'>
            <h1 className="titreContenu">{ligue}</h1>
            <p >{children}</p>
            <Link to={`/${chemin}`} className="BtnContenu">Par ici</Link>
          </div>
    </div>
    )
  }
}

export default ItemContenu
