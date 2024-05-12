export default function Complete ({ filename }) {
    // It is impossible to pass an array to our children
    
    const imageUploaded = fetch('http:localhost:3000/public/')

   return (
    <div>
        <div className="image">
        
            <div className="Upload__message">
                <i></i>
                <p>Uploaded Successfully!</p>
            </div>
            <div className="Uploaded__image">
            </div>
            <div className="Uploaded__image--link">
                <div className='Uploaded__image--link-p'>https://image-uploader-backend-git-main-o897s-projects.vercel.app/api/upload/{filename}</div>
                <button>Copy Link</button>
            </div>
        </div>
    </div>
   )

}