import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/About.jsx";

function App() {
  
    return(
            

        <Router>

            <div className="App">
            <Header/>

            <Routes>

                <Route path="/"
                    element={<Home/>}
                />    

                <Route path="/about" 
                    element={<About/>}
                />

            </Routes>

            </div>

        </Router>
    
    );
}

export default App
