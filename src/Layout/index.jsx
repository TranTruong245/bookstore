import Header from "./Header"
import Footer from "./Footer"
import Banner from "./Banner"
export default function Deafault({children}) {
    
    return (
        <div className="relative top-0">
            <Header/>
            <Banner/>
            <div className="block mb-32">{children}</div>
            
          <Footer/>            
        </div>
    )
};
