import { useRef, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UpdateProfile = () => {
  const { user, logout, checkAuth } = useAuth()
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    fname: null,
    lname: null,
    uname: null,
    about: null,
    tiktokuname: null,
    fcbkuname: null,
    ytb: null,
    privacy: null,
    photo: null
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setFormData(prev => ({ ...prev, photo: file }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleDelete = async () => {
    try {
      const response = await fetch("https://oraserver.online/auth/delete", {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        const err = await response.json();
        console.log("error deleting account:", err);
        return;
      }

      logout();
      navigate("/login");

    } catch (err) {
      console.log("network error:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. upload photo first if selected
      // the photo mudt go to cloudinary
      if (formData.photo) {
        const photoForm = new FormData();
        photoForm.append("file", formData.photo);

        await fetch("https://oraserver.online/auth/update/photo", {
          method: "PUT",
          credentials: "include",
          body: photoForm
        });
      }

      // 2. update text fields
      const form = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] && key !== "photo") {
          form.append(key, formData[key]);
        }
      });

      const response = await fetch("https://oraserver.online/auth/update", {
        method: "PUT",
        credentials: "include",
        body: form
      });

      if (!response.ok) {
        const err = await response.json();
        console.log("server error:", err);
        return;
      }

      await checkAuth();
      navigate('/profile');

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
            <div className='updat-prof-user-info'>
              <h1>Profile Settings</h1>
              <div className="profile_icon updt-img">
                <img
                  src={preview || user?.photo || 'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3408.jpg?w=360'}
                  alt="user"
                />
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
                <button className='submit__img-btn' onClick={() => fileInputRef.current.click()}>Change</button>
              </div>
              <div className='prof-row'>
                <div className='prof-col'>
                  <label>First Name</label>
                  <input name='fname' className='prof-input' onChange={handleChange} placeholder={user?.firstName || 'Enter your firstname'} />
                </div>
                <div className='prof-col'>
                  <label>Last name</label>
                  <input name='lname' className="prof-input" onChange={handleChange} placeholder={user?.lastName || 'Enter your lastname'} />
                </div>
              </div>
              <div className='prof-col'>
                <label>Username</label>
                <input name='uname' className='prof-input' onChange={handleChange} placeholder={user?.uname || 'Enter your username'} />
              </div>
              <div className='prof-col'>
                <label>About</label>
                <textarea name="about" rows="4" cols="50" onChange={handleChange} placeholder={user?.about || 'Fun fact about you...'} />
              </div>
              <div className='prof-row'>
                <div className='prof-col'>
                  <label>Youtube</label>
                  <input name="ytb" className="prof-input" onChange={handleChange} placeholder={user?.ytb || 'Enter your Youtube username'} />
                </div>
                <div className='prof-col'>
                  <label>Facebook</label>
                  <input name="fcbkuname" className='prof-input' onChange={handleChange} placeholder={user?.fcbkuname || 'facebook username'} />
                </div>
              </div>
              <div className='row'>
                <button className='submit__img-btn update' onClick={handleSubmit}>Update</button>
                <button className='submit__img-btn delete' onClick={handleDelete}>Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default UpdateProfile