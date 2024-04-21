import { useState } from "react"
import "./Navbar.css"
import {  Link } from 'react-router-dom';
import News from "./News";
import { useNavigate } from "react-router-dom";



function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const submitFunc = (e)=>{
    e.preventDefault();
    navigate(`/news/${search}`)
  }
  return (
    <div className="navbar">
        <div className="navbar_logo">
            <Link to="/" className="logo">News App</Link>
        </div>
        <div className="navbar_links">
            <ul>
                <li><Link to="/news/ipl">IPL</Link></li>
                <li><Link to="/news/finance">Finance</Link></li>
                <li><Link to="/news/politics">Politics</Link></li>
                <li><Link to="/news/technology">Technology</Link></li>
            </ul>
        </div>
        <div className="navbar_search">
            <form  onSubmit={submitFunc}>
                <div className="search_input">
                    <input type="text" name="" onChange={e=> setSearch(e.target.value)} placeholder="eg. Engineering"/>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
  )
}

export default Navbar