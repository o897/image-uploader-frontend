import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login = () => {
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

            const response = await fetch('http://localhost:3004/auth/creds', {

            // const response = await fetch('http://localhost:3000/auth/login', {
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
        <div className="login__pg">
            <form className="form__signin" onSubmit={handleSubmit}>
                <h1>Register</h1>
                {/* make it a component */}
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