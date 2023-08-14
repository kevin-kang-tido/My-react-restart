import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { products } from './data/products';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

function App() {
  console.log(products)
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/create' element={<ProductForm />} />
        <Route path='/datatable' element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </>

  );
}

export default App;
