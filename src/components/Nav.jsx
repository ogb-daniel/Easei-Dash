import React from "react";

export default function Nav(){
    return(
        <div className="bg-white flex py-2 justify-around">
       
        <div className="flex justify-between px-4 border-gray-300 border-r-2 items-center w-full">
            <span className="flex items-center"> <span>Company Name</span> <span className="w-0 ml-2 h-0 border-t-4 border-t-black border-l-4 border-l-transparent border-r-4 border-r-transparent"></span></span>
            <div className="flex">
                <span className="bg-gray-200 py-2 px-4  flex items-center rounded-tl-xl rounded-bl-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>
                <span className="w-0 h-0 border-t-4 ml-2 border-t-black border-l-4 border-l-transparent border-r-4 border-r-transparent"></span>
                </span>
                <input className="bg-gray-200 outline-none py-2 rounded-tr-xl rounded-br-xl" placeholder="Search" type="text" name="" id="" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 18h14v-6.969C19 7.148 15.866 4 12 4s-7 3.148-7 7.031V18zm7-16c4.97 0 9 4.043 9 9.031V20H3v-8.969C3 6.043 7.03 2 12 2zM9.5 21h5a2.5 2.5 0 1 1-5 0z"/></svg>
        </div>
            <span className="flex items-center min-w-fit w-1/4 pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z"/></svg>
                <span>Mayowa Omotunde</span>
            </span>
    
        </div>
    )
}