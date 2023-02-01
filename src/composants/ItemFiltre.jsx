import '../style/Filtre.css';

function ItemFiltre({logo, children}) {

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
         <img src={logo} alt='logo de la ligue'/>
        </div>
        <div className="flip-card-back">
          <h1>{children}</h1>
        </div>
      </div>
    </div>
  )
}

export default ItemFiltre
