import { useNavigate } from "react-router-dom"
import "../../src/App.css"
import { Link } from 'react-router-dom';


const Navbar = () => {

   const navigate = useNavigate();

    // extend pop up component
    // <a href="http://localhost:3000/auth/google"></a>
    return (
        <> 
        <div className="navbar">
            <div>Memoir</div>
            <div className="navbar__menu">
                <input name="search" className="navbar__menu-input" placeholder="Search photos using keywords or a description"/>
                <button className="navbar__menu-btn-login" onClick={() => navigate('/login')}>Log in</button>
                <button className="submit__img-btn" onClick={() => navigate('/upload')}>Upload an image</button>   
            </div>
        </div>
        <div className="options">
            <div className="options-item"><Link to="/collection">Anime</Link></div>
            <div className="options-item"><Link to="/afcon"/> Sports</div>
            <div className="options-item"><Link to="/memories"/> Year Memories</div>
            <div className="options-item"><Link to="/2026"/>Netflix 👀</div>  {/*eye emojis */}
        </div>
      
        </>
       

    )
}

export default Navbar