import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { products } from './data/products';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  console.log(products)
  return (
    <>
    <div className='container'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
    </>

  );
}

export default App;
