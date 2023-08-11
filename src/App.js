import logo from './logo.svg';
import './App.css';
import Card, { Cardd } from './components/Card';

function App() {
  return (
    <div className='container'>
      <div className='row g-4'>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <Card 
          URL="https://eduport.webestica.com/assets/images/courses/4by3/08.jpg"
          title="Some quick example text to build on the card title and make up the bulk of the card's content"
          />
        </div>
        <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
          <Cardd
          URll="https://eduport.webestica.com/assets/images/courses/4by3/03.jpg"
          titlee="Hello it's me!"
          />
        </div>
      </div>
    </div>

  );
}

export default App;
