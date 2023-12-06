
import React, { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import app_config from "../config";
import {saveAs} from 'file-saver';
// import Navbar from "./Navbar";
// import "./Home.css"

const Home = () => {

  const [imageList, setImageList] = useState([]);
  const navigate = useNavigate();
  const {API_URL} = app_config;

  const fetchEquipmentData = async () => {
    const res = await fetch(API_URL+'/image/getall');
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setImageList(data);
  }
  useEffect(() => {
    fetchEquipmentData();
  }, [])

  const handleDelete = (index) => {
    const newCards = imageList.filter((card, i) => i !== index);
    setImageList(newCards);
};


// for downloading the image







// for sharing the images
function handleShare(index) {
 
  const imageUrl = API_URL + '/' +  imageList[index].image;
  if (navigator.share) {
      navigator.share({
          title: 'Share Image',
          text: 'Check out this image!',
          url: imageUrl
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  } else {
      console.log('Web Share not supported on this browser');
  }
}


const handleDownload = (e) => {
  saveAs(API_URL+'/'+ e.image, "image.jpg");
}





 

  const handleButton = () =>{
    navigate("/whiteboard");
  }
    return(
    <div>
      {/* <Navbar/> */}
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card m-5 border-primary ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWyDpodLBrQSahXTFuRbgs79O5qe_IZcSmzQ&usqp=CAU" className="card-img-top "/>
      <div className="card-body m-auto  ">
       
      <button className="btn btn-primary " onClick={handleButton} >Drawing Tool</button>
        {/* <button className="btn btn-primary ms-2">Download</button>
        <button className="btn btn-danger ms-2">Delete</button> */}
        
      </div>
    </div>
  </div>
  {imageList.map((e, index) => (
  <div className="col-sm-6" style={{}}>
   
    <div className="card m-5 border-primary">
        <img src={API_URL+'/'+ e.image} className="card-img-top" id={`image-${index}`}/>
      <div className="card-body">
       
        
       <button className="btn btn-primary" onClick={() => handleDownload(e)}>Download</button>
        <button className="btn btn-primary ms-2" onClick={ () => handleShare(index)} >Share</button>

        <button className="btn btn-danger ms-2" onClick={ () => handleDelete(index)} >Delete</button>
      </div>
    </div>
   
  </div>
   ))}
</div>

    </div>
    )
}

export default Home