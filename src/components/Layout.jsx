import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Layout({children}){
    return(<div className="layout">
      <Header />
      <div className="layout-mid"> 
      <Sidebar />
      {children}
      </div>
      <Footer />
    </div>)
}

export default Layout;