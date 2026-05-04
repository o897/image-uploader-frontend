import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/Footer";
import toast from "react-hot-toast";

const Register = () => {

    const { login } = useAuth();
    const API_URL =
        process.env.REACT_APP_API_URL ||
        "https://oraserver.online";

    // const LOCAL_URL = "http://localhost:3001";

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

    // register user
    const handleSubmit = async (e) => {
        console.log(formData);

        e.preventDefault();

        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials : "include",
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                login(data);
                navigate('/profile/edit');
            } else {
                toast(data.message);
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
                    <input type="email" placeholder="Enter your email" name="email" onChange={handleChange} value={formData.email} />
                </div>
                <div className="form__signin-input">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder="Enter our password" onChange={handleChange} value={formData.password} />
                </div>
                <button className="form__signin-btn login" type="submit">Register</button>
                <p>
                    By continuing, you agree to our
                    <a className="form__link" href="/privacy-policy">Privacy Policy</a>
                    and{" "}
                    <a className="form__link" href="/terms-of-service">Terms of Service</a>
                </p>
            </form>
            <Footer/>
        </div>
    )
}

export default Register;