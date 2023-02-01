function ItemContenu({logo, children}) {
  return (
  <div className="ContenuDescription">
    <div className="imageBorder">
          <div className="imageBorder2">
            <img className='ContenuImg' src={logo} alt="logo de la ligue" />
          </div>
        </div>
        <p className='ContenuTexte'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit mollitia laborum quaerat optio ipsum ducimus magnam obcaecati placeat animi sint!</p>
  </div>
  )
}

export default ItemContenu
