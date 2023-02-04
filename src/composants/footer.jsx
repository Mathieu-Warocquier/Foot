import "../style/Footer.css"

function Footer() {
  return (<div className="footer">
            <div className="footer-links">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="footer-copyright">
              Pour les recruteurs amoureux du foot <i className="fas fa-heart"></i>
            </div>
          </div>
)
}

export default Footer
