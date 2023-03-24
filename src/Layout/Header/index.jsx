import { NavLink } from "react-router-dom"
import { useState } from "react"
import SearchBtn from "../../pages/button/SearchBtn"
export default function Header() {
    const tabs= ['Home', 'Book', 'Login']
    const [type, setType]= useState('')
    const [searchTerm, setSearchTerm] = useState("");
    return ( 
        <div className="
        bg-slate-300/90 
        flex gap-x-10 
        justify-center 
        fixed top-0 left-0 right-0 z-10" // giữ thanh header dính vào khi cuộn chuột.           
        >
            {tabs.map(tab => (
                <NavLink 
                key={tab}
                style = {type === tab ? {
                    color: '#fff',
                    background: '#333'
                }: {}}
                onClick = {()=> setType(tab)}
                to = {`/${tab}`} className="rounded border-2 ">
                   <h1>{tab}</h1> 
                </NavLink>
            ))}
            <div className="mr-10">
                <SearchBtn onChange={(event)=> {
                    setSearchTerm(event.target.value);
                }} />
                </div>
           
        </div>
    
    )
};
