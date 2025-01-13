
import Navbar from "./components/navbar/navbar"
import RecipeCard from "./components/recipe-card/recipe-card"
import './App.css';
import { Route, Router, Routes } from "react-router";
import Login from "./components/login/login";



function App() {

  return (
    <>
      <div>
        <Navbar></Navbar>
        <div className="container">
          <Routes>
            <Route path="/" element={<RecipeCard />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
