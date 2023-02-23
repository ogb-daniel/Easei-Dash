import React, { useEffect } from "react";
import chart from '../chart1.png';
import chart2 from '../chart2.png';
import chart3 from '../chart3.png';
import chart4 from '../chart4.png';
import { Chart,registerables } from "chart.js";
Chart.register(...registerables)
export default function Content(){
    useEffect(()=>{
        (async function(){
            const data = [2,4,6,3,8,6,7]
            const labels = ['Mon','Tue','Wed','Thur','Fri','Sat','Sun']
            const graph = document.getElementById('graph').getContext('2d'); 
            new Chart(graph,{
                type:'bar',
                data:{
                    labels:labels,
                    datasets:[
                        {
                        label:'Approved Invoices',
                        data:data,
                        backgroundColor: [
                            'rgba(0, 150, 255)',
                   
                          ],
                      
                          borderWidth: 1
                    },
                        {
                        label:'Declined Invoices',
                        data:[0,1,3,2,5,3,3],
                        backgroundColor: [
                           
                            'rgba(251, 146, 60)',
                          ],
                      
                          borderWidth: 1
                    }
                ]
                },
                
                options:{
                    scales:{
                        x:{
                            grid:{
                                display:false   
                               }
                        },
                        y:{
                            beginAtZero:true,
                            min:0,
                            max:50,
    
                            ticks:{
                                callback: function(val,index){
                                    return index % 2 === 0 ? this.getLabelForValue(val) :''
                                },
                            
                            }
                        },
                    },
                    plugins:{
                        legend:{
                            display:false
                        }
                    }
                }
            })
        })();
    },[])
   
    return(
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center">
          <span>

            <h1 className="text-blue-900 text-2xl font-semibold">Welcome Charity,</h1>
            <p className="text-sm text-gray-600 mt-2">Welcome to Upskillz,your simple invoicing solution.</p>
          </span>
          <button className="flex  items-center bg-blue-800 px-4 py-3 text-md text-white rounded-md">Create new invoice <span className="w-0 ml-4 h-0 border-t-4 border-t-white border-l-4 border-l-transparent border-r-4 border-r-transparent"></span></button>
          </div>  
          <div className="flex space-x-4 justify-between mt-10">
            <div className="bg-white shadow-md p-4 rounded-md flex-1 flex items-center justify-between">
                <div>
                <p>Total Invoices</p>
                <p className="mt-2 font-bold">980</p>
                <div className="flex mt-2 text-gray-400">
                    
                <span className="flex items-center mr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(149,164,166,1)"/></svg> 20.8%</span>
                <span>-11 this week</span>
                </div>
            </div>
            <div>

            <img className="w-16" src={chart} alt="chart" />
            </div>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex-1 flex items-center justify-between">
                <div>
                <p>Approved Invoices</p>
                <p className="mt-2 font-bold">928</p>
                <div className="flex mt-2 text-gray-400">
                    
                <span className="flex items-center mr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(149,164,166,1)"/></svg> 20.8%</span>
                <span>-11 this week</span>
                </div>
            </div>
            <div>

            <img className="w-16" src={chart2} alt="chart" />
            </div>
            </div>
            <div className="bg-white shadow-md  p-4 rounded-md flex-1 flex items-center justify-between">
                <div>
                <p>Declined Invoices</p>
                <p className="mt-2 font-bold">48</p>
                <div className="flex mt-2 text-gray-400">
                    
                <span className="flex items-center mr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(149,164,166,1)"/></svg> 20.8%</span>
                <span>-11 this week</span>
                </div>
            </div>
            <div>

            <img className="w-16" src={chart3} alt="chart" />
            </div>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md flex-1 flex items-center justify-between">
                <div>
                <p>Pending Invoices</p>
                <p className="mt-2 font-bold">4</p>
                <div className="flex mt-2 text-gray-400">
                    
                <span className="flex items-center mr-4"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M16.004 9.414l-8.607 8.607-1.414-1.414L14.589 8H7.004V6h11v11h-2V9.414z" fill="rgba(149,164,166,1)"/></svg> 20.8%</span>
                <span>-11 this week</span>
                </div>
            </div>
            <div>

            <img className="w-16" src={chart4} alt="chart" />
            </div>
            </div>
            
          </div>
          <div className="bg-white rounded-md shadow-md p-4 mt-4">
          <h1 className="text-blue-900 text-lg  font-semibold">Invoice Status</h1>
          <p className="text-sm text-gray-400 mt-2">Monitor the progress of your invoice</p>
            <div className="flex mt-4 justify-between items-center">
                <ul className="flex space-x-5 justify-around text-gray-400">
                    <li className="p-2 border-b border-b-black text-black">All (980)</li>
                    <li className="p-2">Pending (4)</li>
                    <li className="p-2">Approved (928)</li>
                    <li className="p-2">Declined (48)</li>
                </ul>
                <span className="text-gray-400">Showing 1-5 of 50 results</span>
            </div>
            <div className="flex items-center mt-3 bg-blue-100 p-2">
                <input className="mr-10" type="checkbox" name="" id="" />
            <div className="grid flex-1 grid-cols-4 text-blue-900 font-semibold">
                <span>Invoice No</span>
                <span>Client name</span>
                <span>Invoice status</span>
                <span>Date</span>
            </div>
            </div>
            <div className="flex items-center p-2">
                <input className="mr-10 " type="checkbox" name="" id="" />
            <div className="grid flex-1 grid-cols-4 text-gray-400">
                <span>#120845</span>
                <span>Bolatito Julius</span>
                <span className="text-yellow-400">Pending</span>
                <span className="flex items-center justify-between">01/08/22 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(149,164,166,1)"/></svg></span>
            </div>
            </div>
            <div className="flex items-center p-2">
                <input className="mr-10 " type="checkbox" name="" id="" />
            <div className="grid flex-1 grid-cols-4 text-gray-400">
                <span>#120845</span>
                <span>Bolatito Julius</span>
                <span className="text-yellow-400">Pending</span>
                <span className="flex items-center justify-between">01/08/22 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(149,164,166,1)"/></svg></span>
            </div>
            </div>
            <div className="flex items-center p-2">
                <input className="mr-10 " type="checkbox" name="" id="" />
            <div className="grid flex-1 grid-cols-4 text-gray-400">
                <span>#120845</span>
                <span>Bolatito Julius</span>
                <span className="text-green-400">Approved</span>
                <span className="flex items-center justify-between">01/08/22 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(149,164,166,1)"/></svg></span>
            </div>
            </div>
            <div className="flex items-center p-2">
                <input className="mr-10 " type="checkbox" name="" id="" />
            <div className="grid flex-1 grid-cols-4 text-gray-400">
                <span>#120268</span>
                <span>Nike Olowo</span>
                <span className="text-green-400">Approved</span>
                <span className="flex items-center justify-between">01/08/22 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(149,164,166,1)"/></svg></span>
            </div>
            </div>
            <div className="flex items-center p-2">
                <input className="mr-10 " type="checkbox" name="" id="" />
            <div className="grid flex-1 grid-cols-4 text-gray-400">
                <span>#121009</span>
                <span>Charles Okpara</span>
                <span className="text-red-600">Declined</span>
                <span className="flex items-center justify-between">01/08/22 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(149,164,166,1)"/></svg></span>
            </div>
            </div>
          </div>
          <div className="bg-white rounded-md p-4 mt-4 shadow-md">
         <div className="flex justify-between items-center">
        <div>

          <h1 className="text-blue-900 text-lg  font-semibold">Invoice statistics</h1>
          <p className="text-sm text-gray-400 mt-2">Track your invoice flow for any given period</p>
        </div>
            <button className="border-black border-2 font-semibold flex  items-center  px-4 py-1 text-md  rounded-md">Last 1 week <span className="w-0 ml-4 h-0 border-t-4 border-t-black border-l-4 border-l-transparent border-r-4 border-r-transparent"></span> </button>
         </div>
         <div className="float-right my-2">
            <span className="flex items-center"> <div className=" mr-2 w-4 h-4 rounded-full bg-blue-400"></div> Approved Invoices</span>
            <span className="flex items-center"> <div className=" mr-2 w-4 h-4 rounded-full bg-orange-400"></div> Declined Invoices</span>
         </div>
         <canvas  id="graph"></canvas>
          </div>
        </div>
    )
}