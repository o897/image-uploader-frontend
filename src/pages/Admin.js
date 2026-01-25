import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


const Admin = () => {
    const [user, setUser] = useState({});
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

            const response = await fetch('http://localhost:3000/admin/update', {
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
                navigate('/homeS');

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
        <>
            <Navbar/>
            <div>
                {/* image being updated */}
                {/* remove */}
                {/* assign to a collection */}
                <input name=" onChange={handleChange} description" value=""/>
                <input name="" onChange={handleChange} value=""/>
                <button>Update</button>

            </div> 
        </>
    )


}

export default Admin;