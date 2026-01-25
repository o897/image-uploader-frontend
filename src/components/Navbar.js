import { useNavigate } from "react-router-dom"
import { useState } from "react";
import "../../src/App.css"
import { Link } from 'react-router-dom';
import { useEffect } from "react";


const Navbar = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // extend pop up component
    // <a href="http://localhost:3000/auth/google"></a>

    // check to see if user is  logged in if yes hide some things
    useEffect(() => {
        try {
            fetch("http://localhost:3000/success", {
                method: "GET",
                credentials: "include",
            })
                .then((data) => {
                    setUser(data.user);
                })
                .catch(() => {
                    setUser(null);
                })
                .finally(() => {
                    setLoading(false);
                })
        } catch (error) {

        }
    }, [])
    return (
        <>
            <div className="navbar">
                <div><Link to="/"> Memoir</Link></div>
                <div className="navbar__menu">
                    <input name="search" className="navbar__menu-input" placeholder="Search photos using keywords or a description" />
                    {user ? (
                        <Link to={"http://localhost:3000/auth/logout"}>Logout</Link>
                    ) : <button className="navbar__menu-btn-login" onClick={() => navigate('/login')}>Log in</button>
                    }
                    <button className="submit__img-btn" onClick={() => navigate('/upload')}>Upload an image</button>
                </div>
            </div>
            <div className="options">
                <div className="options-item"><Link to="/collection/{}">Anime</Link></div>
                <div className="options-item"><Link to="/afcon" /> Sports</div>
                <div className="options-item"><Link to="/memories" /> Year Memories</div>
                <div className="options-item"><Link to="/2026" />Netflix 👀</div>  {/*eye emojis */}
            </div>

        </>


    )
}

export default Navbar