import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Footer from "./components/Footer.jsx";

const styles = {
    App : {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },

      content: {
        flex: 1,
      }
}


function App() {
  
    return(

        <Router>

            <div style={styles.App}>
                <Header/>

                <div style={styles.content}>
                    <Routes>

                        <Route path="/"
                            element={<Home/>}
                        />    

                        <Route path="/about" 
                            element={<About/>}
                        />

                        <Route path="/projects" 
                            element={<Projects/>}
                        />

                    </Routes>
                </div>

            <Footer/>
            </div>

        </Router>
    
    );
}

export default App
