
import { Route, Routes } from "react-router";
import './App.css';
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import RecipeCard from "./components/recipe-card/recipe-card";

import { createClient } from "@supabase/supabase-js";
import { Database } from "./database/database.types";
import { DatabaseClientContext } from "./service/database-context";
import SearchResult from "./components/search-result/search-result";
import Home from "./components/home/home";
import CreateRecipe from "./components/create-recipe/create-recipe";
// require('dotenv').config()


const databaseClient = createClient<Database>('https://ddfwnakhvceijxhnyukd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZnduYWtodmNlaWp4aG55dWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MTE4NzEsImV4cCI6MjA1MjI4Nzg3MX0.DdFexrO3IQsJXEjB8jrFTFhhgA0E6NQuJljIzCVUdu4')


function App() {
  return (
    <>

      <DatabaseClientContext.Provider value={databaseClient}>
          <Navbar></Navbar>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe" element={<RecipeCard />} />
              <Route path="login" element={<Login />} />
              <Route path="search" element={<SearchResult />} />
              <Route path="create" element={<CreateRecipe />} />
            </Routes>
            <div className="bottom"></div>
          </div>
      </DatabaseClientContext.Provider>
    </>
  )
}

export default App
