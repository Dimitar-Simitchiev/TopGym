
import './App.css';
import Home from './components/Home';
import Navbar from './Navbar';
import Register from './components/Register'
import Login from './components/Login'
import CalorieCalculator from './components/Calculator'
import Programs from './components/Programs'
import CreateDiet from './components/CreateDiet'
import { Route, Routes } from "react-router-dom"





function App() {



  return <>
  <Navbar />
  <div className="container-route">
  <Routes>
   <Route path="/"  element={<Home />}/> 
   <Route path="/login" element={<Login/>} />
   <Route path="/register" element={<Register />} />
  <Route path="/calculator"  element={<CalorieCalculator/>} />
  <Route path="/programs" element={<Programs/>} />
  <Route path="/createprogram" element={<CreateDiet/>} />
  </Routes>
  </div>
  </>

}
export default App;