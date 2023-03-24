
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom"
import listBooks from "../data"
import Delete from "./button/deletebtn";
import Data from '../API/Data';
import { Modal } from 'antd';
import { message, Popconfirm, Button } from 'antd';
//import Paginations from "./pagination/pagination";

export default function Book() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [numberPage, setNumberPage] = useState(1)
    let [list, setList] = useState([])
    
    const [searchTerm, setSearchTerm] = useState("");
    function getIndexArr(arr, i, j){
        let newArr = []
        for (i ; i <= j; i++){
            if(i < arr.length){
                newArr.push(arr[i])
            }
        }
        return newArr
     }
     useEffect(()=> {
        setList(getIndexArr(listBooks, numberPage * 9 - 9, numberPage * 9 - 1))
     },[numberPage])
   
    const handleOk = () => {
        <div> style={{backgroundColor: '#3446eb' }};</div> 
        setIsModalOpen(false);
    };
    const handleCancel = () => {
    setIsModalOpen(false);
    };
    // let book;
    // const [visibles, setVisibles]= useState(false)
    // const confirm = () => {
    //   listBooks.splice(book,1)
    //   console.log(book);
    //   message.success('Delete success');
    // };
    
    // const cancel = (e) => {
    //   console.log(e);
    //   message.error('Delete Error');
    // };
    // const handleConfirm = () => {
    //   confirm(visibles);
    //   setVisibles(false);
    // };
    
    // const handleNo = () => {
    //   cancel(visibles);
    //   setVisibles(false);
    // };
    

    if(list.length > 0) {
    return (
        <div>
            <form>
        <input 
        type="text"  
        className="justify-center ml-60  border-solid border-red-600"
        placeholder="input search text"
        onChange={(e) => setSearchTerm(e.target.value)}
        />
        </form>
        <div className="flex justify-center flex-row gap-6 flex-wrap " 
                style={
                        {
                            width: "1100px",
                            height:"1500px", 
                            margin: "0 auto",
                        }
                }
        >
        
            {/* dữ liệu render ra khi click */}
      <Modal title="Detail" open={isModalOpen} onOk ={handleOk } onCancel={handleCancel}>
       <Data/>
      </Modal>

      
            {
                
                list
                .filter((book) => {
                    if (searchTerm === "") return book
                    else if (
                        book.title.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                        return book
                    }
                })

                .map(book =>{
                    return (
                        <div
                         key={book.id} 
                            className="border-x-8 rounded-3xl" 
                            style={{
                                width: "310px",
                                height: "520px", // đặt chiều cao để duy trì tỉ lệ khung hình
                                overflow: "hidden", // ẩn bất kì phần ảnh tràn
                                border: "2px solid black"
                            }}
                        > 
                             <div 
                                style={{
                                        height: "80%", // đặt chiều cao cố định cho vùng chứa
                                        display: "flex", // sử dụng flexbox để căn giữa

                                }}
                                onClick={() => {
                                    setIsModalOpen(true)
                                }} 
                            >                          
                            <img 
                            src={book.url} 
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%", 
                                objectFit: "cover", // chia tỉ lệ và cắt ảnh để lấp đầy
                             }}                                 
                            />
                            </div>
                            <div 
                                style={{ 
                                        height: "20%", 
                                        padding: "0.5rem",
                                    }} 
                                className="bg-teal-100 flex-none flex-row grow-0"
                                >
                                <div className="flex gap-3"> 
                                    <p> {book.title}</p>
                                </div>
                                <p>{book.price}</p>  
                                {/* Delete({book}); */}
                                <Delete/>
                                <div>
                                   
                                    {/* <Popconfirm
    title="Delete the book"
    description="Are you sure to delete this book?"
    visibles = {visibles}

    onConfirm={handleConfirm}
    onCancel={handleNo}
    okText="Yes"
    cancelText="No"
  >
    <Button 
      type='primary' 
      style={{backgroundColor: 'red'}} 
      onClick={() => setVisibles(true)}
    >
      Delete
    </Button>
  </Popconfirm> */}
                                    </div>                 
                            </div>
                        </div>
                    )
                })
            }           
           <Outlet/> 
        </div>
    <div className="flex flex-row">
        <div onClick= {()=>{
            if(numberPage === 1) return
            else setNumberPage(numberPage -1)
        }} 
        >
            <Button >
                Prevous 
            </Button>
        </div>
 
        <div 
        onClick={()=> {
            if(numberPage >= Math.ceil(listBooks.length/9)) return;
            else setNumberPage(numberPage + 1);
        }}
        >
            <Button className="ml-2">
                Next 
            </Button>
           
        </div>
        <div>Page: {numberPage}</div>
    </div>
 </div>
    )
}
}
