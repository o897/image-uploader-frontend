import {useState} from 'react'
import Navbar from '../components/Navbar';

const UpdateProfile = () => {

  const [formData,setFormData] = useState({
    fname : "",
    lname : "",
    about : "",
    tiktokuname : "",
    fcbkuname : "",
    ytb : "",
    privacy : "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    // from this target we are targetting this variables
    const {name,value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
     [ name ] : value //where name match our input attach value
    })
  )}

  const handleSubmit = async (e) => {

    const response = await fetch("https://oraserver.online/auth/update", {
      method : "PUT",
      credentials : 'include'
    })

    if (!response.ok) {
        console.log("something wrong with your data")
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
                  src="https://images.pexels.com/users/avatars/2158460592/orapeleng-mathebula-233.jpg?auto=compress&fit=crop&h=140&w=140&dpr=1"
                  alt="profile image"
                />
                <button className='submit__img-btn'>Change</button>
              </div>
              <div className='prof-row'>
                <div className='prof-col'>
                  <label>First Name</label>
                  <input name='fname' className='prof-input' placeholder='Enter your firstname'/>
                </div>
                <div className='prof-col'>
                  <label>Last name</label>
                  <input name='lname' className="prof-input" placeholder='Enter your lastname'/>
                </div>
              </div>
            
              <div className='prof-col'>
                <label>Username</label>
                <input name='uname' className='prof-input' placeholder='Enter your username'/>
              </div>
              <div className='prof-col'>
                <label>About</label>
                <textarea name="about" rows="4" cols="50" placeholder='Fun fact about you...'>
                </textarea>
              </div>
               <div className='prof-row'>
                
                <div className='prof-col'>
                  <label>Youtube</label>
                  <input name="yname" className="prof-input" placeholder='Enter your Youtube username'/>
                </div>
                 <div className='prof-col'>
                  <label>Facebook</label>
                  <input name="fcbkuname" className='prof-input' placeholder='facebook username'/>
                </div>
              </div>
               <div className='prof-row'>
               
                <div className='prof-col'>
                  <label>Privacy</label>
                  <select className='prof-input select'>
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                  </select>
                </div>
              </div>
              
              <button className='submit__img-btn'>Submit</button>


            </div>
          </div>
        </div>
      </div>
    </>



  )
}

export default UpdateProfile