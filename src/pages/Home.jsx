// import logo from './logo.svg';
import Banner from "../composants/banner";
import Filtre from "../composants/filtre";
import ContenuHome from "../composants/contenu";
import Footer from "../composants/footer";



function Home() {
  return (
    <div>
      <Banner />
      <Filtre />
      <ContenuHome />
      <Footer />
    </div>
  );
}

export default Home;
