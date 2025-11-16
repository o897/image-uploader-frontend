import Navbar from "../components/Navbar"
import { useState } from "react"
function Home() {

  // fetch images from cloudinary api

  const [pictures,setPictures] = useState()

  

   return (
    <div>
      <Navbar/>
      <div className="hero">
          <div className="hero__images">
              <div className="hero__images-image l">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s" alt=""/>
              </div>
              <div className="hero__images-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDK2iXXm3J4BUxIjQANFOKMiOLRvwvGVSPnA&s" alt="" />
              </div>
              <div className="hero__images-image r">
                 <img src="https://www.discoverafrica.com/wp-content/uploads/2022/08/iStock-1174860404-1920x1080.jpg" alt=""/>
              </div>
          </div>
           <div className="hero__images">
              <div className="hero__images-image l">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNubLmqdOK9pZWU-2IiD20cuSIdUUDi9-NvQ&s" alt=""/>
              </div>
              <div className="hero__images-image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDK2iXXm3J4BUxIjQANFOKMiOLRvwvGVSPnA&s" alt="" />
              </div>
              <div className="hero__images-image r">
                 <img src="https://www.discoverafrica.com/wp-content/uploads/2022/08/iStock-1174860404-1920x1080.jpg" alt=""/>
              </div>
          </div>
         
      </div>
    </div>
   )
}

export default Home