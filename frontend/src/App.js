import Nav from './Components/Nav';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
   <Routes>
    <Route path = "/" element = {<h1>Product Listing Component</h1>} />
    <Route path = "/add" element = {<h1>Add Product Component</h1>} />
    <Route path = "/update" element = {<h1>Update Product Component</h1>} />
    <Route path = "/logout" element = {<h1>Logout Component</h1>} />
    <Route path = "/profile" element = {<h1>Profile Component</h1>} />
    <Route path = "/signup" element = {<Signup ></Signup>} />

   </Routes>
     </BrowserRouter>
     <Footer/>
    </div>

  );
}

export default App;
