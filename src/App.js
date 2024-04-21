import "./App.css"
import Home from "./components/Home";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";
// import "dotenv/config";


function App() {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API;
  return (
    <div className="app">
      <Router>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar/>
        <Routes>
          <Route exact path = "/" element = {<Home setProgress={setProgress} apiKey={apiKey}/>}/>
          <Route exact path = "/news/:query" element = {<News  setProgress={setProgress} apiKey={apiKey}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
