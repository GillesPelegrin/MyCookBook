
import { Route, Routes } from "react-router";
import './App.css';
import Login from "./components/login/login";
import Navbar from "./components/navbar/navbar";
import RecipeCard from "./components/recipe-card/recipe-card";

import { DatabaseClientContext } from "./service/database-context";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./database/database.types";
// require('dotenv').config()




function App() {

  const databaseClient = createClient<Database>('https://ddfwnakhvceijxhnyukd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZnduYWtodmNlaWp4aG55dWtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MTE4NzEsImV4cCI6MjA1MjI4Nzg3MX0.DdFexrO3IQsJXEjB8jrFTFhhgA0E6NQuJljIzCVUdu4')

  return (
    <>

      <DatabaseClientContext.Provider value={databaseClient}>
        <div>
          <Navbar></Navbar>
          <div className="container">
            <Routes>
              <Route path="/" element={<RecipeCard />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </DatabaseClientContext.Provider>
    </>
  )
}

export default App
