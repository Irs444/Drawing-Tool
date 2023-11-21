
import React, { useState } from "react"
import {useNavigate} from 'react-router-dom'
// import "./Home.css"

const Home = () => {

  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (index) => {
    const newCards = cards.filter((card, i) => i !== index);
    setCards(newCards)

  }

  const handleButton = () =>{
    navigate("/whiteboard");
  }
    return(
    <div>
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card m-5 ">
        <img src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" className="card-img-top"/>
      <div className="card-body  ">
       
      <button className="btn btn-primary " onClick={handleButton} >New Tab</button>
        {/* <button className="btn btn-primary ms-2">Download</button>
        <button className="btn btn-danger ms-2">Delete</button> */}
        
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    {cards.map((card, index) => (
    <div className="card m-5">
        <img src={card.image} className="card-img-top"/>
      <div className="card-body">
       
        
        <button className="btn btn-primary">Download</button>
        <button className="btn btn-danger ms-2" onClick={() => handleDelete(index) }>Delete</button>
      </div>
    </div>
    ))}
  </div>
</div>

    </div>
    )
}

export default Home