import SideNavbar from "../components/SideNavbar";
import Navbar from "../components/Navbar";

export default function Layout({children}) {
  
    return (
        <div className="layout">
            <SideNavbar/>
            <div className="layout-main">
                <Navbar/>
                 <main className="main-content">
                {children}
                </main>
            </div>
            
           

           
        </div>
    )
}