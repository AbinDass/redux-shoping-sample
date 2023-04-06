
import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Productlisting from './containers/Productlisting';
import Productdetails from './containers/Productdetails'

function App() {
  return (
    <div className="App">
      <Router>
         <Header/>  
        <Routes>      
       <Route path='/' element={<Productlisting />} />   
       <Route path='/product/:productId' element={<  Productdetails />} />      
        <Route >404 not foound</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
