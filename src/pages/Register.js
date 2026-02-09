import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const API_URL =
        process.env.REACT_APP_API_URL ||
        "https://image-uploader-backend-yzqj.onrender.com";

    const LOCAL_URL = "http://localhost:3001";

    const navigate = useNavigate();

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
        console.log(formData);

        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/auth/creds`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                // console.log(data);
                navigate('/upload');
            } else {
                console.error("Login failed: ", data.message);
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    }

    return (
        <div className="login__pg">
            <form className="form__signin" onSubmit={handleSubmit}>
                <h1>Register</h1>
                {/* make it a component */}
                <div className="form__signin-input">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" onChange={handleChange} value={formData.email} />
                </div>
                <div className="form__signin-input">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" onChange={handleChange} value={formData.password} />
                </div>
                <button className="form__signin-btn login" type="submit">Register</button>
                <p>Create an account</p>
            </form>
        </div>
    )
}

export default Login;