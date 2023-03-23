
import { useState } from "react";
import { Outlet } from "react-router-dom"
import listBooks from "../data"
//import Mode from "./button"
import Delete from "./button/deletebtn";
import Data from '../API/Data';
import { Modal } from 'antd';

export default function Book() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
      <div> style={{backgroundColor: '#3446eb' }};</div> 
    setIsModalOpen(false);
    };

    const handleCancel = () => {
    setIsModalOpen(false);
    };

    return (
    
        <div className="flex justify-center flex-row gap-6 flex-wrap " 
                style={
                        {
                            width: "1000px",
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
                listBooks.map(book =>{
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
                            <div style={{ 
                                    height: "20%", 
                                    padding: "0.5rem",
        
                                 }} 
                                 className="bg-teal-100 flex-none flex-row grow-0"
                            >
                                    <div className="flex gap-3"> 
                                        <p> {book.title}</p>
                                    </div>
                                    <p>{book.price}</p>  
                                         <div><Delete/></div>                 
                            </div>
                        </div>
                    )
                })
            }            
           <Outlet/>
        </div>
    
    )
};
