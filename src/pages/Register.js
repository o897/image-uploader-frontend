import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Register () {
      const navigate = useNavigate();
    
        const [user,setUser] = useState({});
        const [formData, setFormData] = useState({
            email: '',
            password: '',
            message: ''
        })
    
    
    
        const handleChange = (e) => {
            e.preventDefault();
    
            const { name, value } = e.target;
    
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }))
    
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
    
                const response = await fetch('http://localhost:3000/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
    
                const data = await response.json();
    
                if (response.ok) {
                
                    console.log(data);
                    
                    // 2. NOW, the frontend performs the redirect.
                    navigate('/upload');
    
                } else {
                    console.error("Login failed: ", data.message);
                }
    
    
            } catch (error) {
    
                // This catches network errors (e.g., server is down)
                console.error("An error occurred during login:", error);
                // setError("Could not connect to the server. Please try again later.");
    
            }
        }
    return (
         <div className="form__signin-input">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" onChange={handleChange} value={formData.email} />
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={handleChange} value={formData.password} />
        </div>
    )
}

export default Register