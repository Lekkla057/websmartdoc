import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>

      <div style={{display: "flex",alignItems:"canter",background:"linear-gradient(to right, darkred , white)",color:"white"}}>
        <div style={{width:"80%",paddingLeft:20,background:"darkred"}}>
            <h1>Smart Doc</h1>
        </div>
        <div style={{width:"10%",textAlign:"center"}}>
    
        <h3 style={{textDecorationLine:"unset"}}><Link style={{textDecorationLine:"unset",color:"gray"}} to="/">Home</Link></h3>
       </div>
       <div style={{width:"10%",textAlign:"center"}}>
       <h3 style={{textDecorationLine:"unset"}}>  <Link style={{textDecorationLine:"unset",color:"gray"}} to="/contact">Contact</Link></h3>
            </div>
        
      </div>

      <Outlet />
    </>
  )
};

export default Layout;