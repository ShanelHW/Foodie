import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage";
import NavBar from "./components/NavBar";
import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { ImSpoonKnife } from "react-icons/im";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <div class="App-header">
        <ImSpoonKnife class='logo'/>
        <a href= '/'><h1> Foodie </h1></a>
      </div>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} /> 
           
          <Routes>
            <Route path="/recipes/:id/information/" element={<Recipe />} />
            <Route path="/recipes" element={<Searched />} />
            {/* <Route path=`/recipes/${id}` element={<RecipeID />} /> */}
          </Routes>            
          
            <Category />
            <Pages />
          <ImSpoonKnife />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
