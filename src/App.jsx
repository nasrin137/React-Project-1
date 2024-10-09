import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filter from './Components/Filter';
import TrendingCard from './Components/TrendingCard';
import BestSelling from './Components/BestSelling';
import Reviews from './Components/Reviews';
import FindVehicles from './Components/FindVehicles';
import Footer from './Components/Footer';
function App() {
 

  return (
    <>   
     <Navbar></Navbar>
     <Hero></Hero>
     <Filter></Filter>
     <TrendingCard></TrendingCard>
    <BestSelling></BestSelling>
    <Reviews></Reviews>
    <FindVehicles></FindVehicles>
    <Footer></Footer>
    </>
  )
}

export default App
