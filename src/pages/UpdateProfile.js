import { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Navigate, useNavigate } from 'react-router-dom';

const UpdateProfile = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    uname: "",
    about: "",
    tiktokuname: "",
    fcbkuname: "",
    ytb: "",
    privacy: "",
  });

  const handleChange = (e) => {

    // from this target we are targetting this variables
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value //where name match our input attach value
    })
    )
  }

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("https://oraserver.online/auth/update", {
      method: "PUT",
      credentials: "include",
      headers: { "Content-Type": "application/json" }, // ← you had "COntent-Type" typo
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      const err = await response.json();
      console.log("server error:", err);
      return;
    }

    navigate('/');

  } catch (error) {
    console.log("network error:", error);
  }
}


  return (
    <>
      <Navbar />
      <div className='updt_prof-wrapper'>

        <div className='updt-prof-intro'>

          <div className='updat-form-container'>

            <div className='updat-prof-user-info'> {/*make column */}
              <h1>Profile Settings</h1>
              <div className="profile_icon updt-img">
                {/* Added a placeholder image and closed the tag */}
                <img
                  src='https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3408.jpg?w=360'
                  alt="profile image"
                />
                <button className='submit__img-btn'>Change</button>
              </div>
              <div className='prof-row'>
                <div className='prof-col'>
                  <label>First Name</label>
                  <input name='fname' className='prof-input' onChange={handleChange} placeholder='Enter your firstname' />
                </div>
                <div className='prof-col'>
                  <label>Last name</label>
                  <input name='lname' className="prof-input" onChange={handleChange} placeholder='Enter your lastname' />
                </div>
              </div>

              <div className='prof-col'>
                <label>Username</label>
                <input name='uname' className='prof-input' onChange={handleChange} placeholder='Enter your username' />
              </div>
              <div className='prof-col'>
                <label>About</label>
                <textarea name="about" rows="4" cols="50" onChange={handleChange} placeholder='Fun fact about you...'>
                </textarea>
              </div>
              <div className='prof-row'>

                <div className='prof-col'>
                  <label>Youtube</label>
                  <input name="ytb" className="prof-input" onChange={handleChange} placeholder='Enter your Youtube username' />
                </div>
                <div className='prof-col'>
                  <label>Facebook</label>
                  <input name="fcbkuname" className='prof-input' onChange={handleChange} placeholder='facebook username' />
                </div>
              </div>
              <div className='prof-row'>

                {/* <div className='prof-col'>
                  <label>Privacy</label>
                  <select className='prof-input select'>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                  </select>
                </div> */}
              </div>

              <button className='submit__img-btn' onClick={handleSubmit} >Submit</button>


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>



  )
}

export default UpdateProfile