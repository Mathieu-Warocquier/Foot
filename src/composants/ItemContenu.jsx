function ItemContenu({logo, ordre, children}) {

  if ((ordre) === "type2") {
    return (
    <div className="ContenuDescription secondType">
      <div className="imageBorder">
            <div className="imageBorder2">
              <img className='ContenuImg' src={logo} alt="logo de la ligue" />
            </div>
          </div>
          <div className='ContenuTexte secondTexte'>
            <p >{children}</p>
            <button className="BtnContenu secondeBtn">Par ici</button>
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
            <p >{children}</p>
            <button className="BtnContenu">Par ici</button>
          </div>
    </div>
    )
  }
}

export default ItemContenu
