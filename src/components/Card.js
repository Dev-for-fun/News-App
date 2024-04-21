import "./Card.css"
import {  Link } from 'react-router-dom';

function Card({title,image,body,url}) {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <Link to={url} className="btn btn-primary">Read more</Link>
        </div>
    </div>
  )
}

export default Card