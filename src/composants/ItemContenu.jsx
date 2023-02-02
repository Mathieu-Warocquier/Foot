function ItemContenu({logo, children}) {
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

export default ItemContenu
