
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Carausel from './components/Carausel';
import Home from './components/Home';
import MyNavbar from './components/MyNavbar';
import Product from './components/Product';


function App() {
  return (
    <BrowserRouter>
    <>
    <div className="App">
      <header>
        <MyNavbar/>
        <Carausel/>
      </header>
      <Routes>
        <Route path="/product/:name" element={<Product/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
    </>
    </BrowserRouter>
  );
  
  
}

export default App;
