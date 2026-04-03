import Navbar from "../components/Navbar";

export default function Layout({children}) {
  
    return (
        <div className="layout">
            <div className="layout-main">
                <Navbar/>
                 <main className="main-content">
                {children}
                </main>
            </div>
            
           

           
        </div>
    )
}