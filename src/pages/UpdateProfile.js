import React from 'react'
import Navbar from '../components/Navbar';

const UpdateProfile = () => {
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
                <li>Change profile image</li>
              </div>
              <div className='prof-row'>
                <div className='prof-col'>
                  <label>First Name</label>
                  <input className='prof-input' />
                </div>
                <div className='prof-col'>
                  <label>Last name</label>
                  <input className="prof-input" placeholder=''/>
                </div>
              </div>
            
              <div className='prof-col'>
                <label>Username</label>
                <input className='prof-input' />
              </div>
              <div className='prof-col'>
                <label>About</label>
                <textarea rows="4" cols="50">
                </textarea>
              </div>
               <div className='prof-row'>
                <div className='prof-col'>
                  <label>Tiktok</label>
                  <input className='prof-input' placeholder='@username'/>
                </div>
                <div className='prof-col'>
                  <label>Youtube</label>
                  <input className="prof-input" placeholder=''/>
                </div>
              </div>
               <div className='prof-row'>
                <div className='prof-col'>
                  <label>Facebook</label>
                  <input className='prof-input' />
                </div>
                <div className='prof-col'>
                  <label>Other</label>
                  <input className="prof-input" />
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