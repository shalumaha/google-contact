import React,{useEffect,useState} from 'react'
import { useActionData, useNavigate } from 'react-router-dom';
import './Trash.css';
import axios from 'axios';
import { TrashAPI } from './TrashAPI';


export default function Trash() {
  let [view,setView]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000').then((s)=>{
        setView(s.data)
    })
  },[]);
    function deltrash(a)
    {   
        axios.delete(`${TrashAPI}/${a}`).then(()=>{
          axios.get('http://localhost:5000').then((s)=>{
              setView(s.data)
          })
      })
      alert("Data deleted");
    }
  return (
    <div>
      <table className='table' id="trashtable">
        <tr>
            <th>Sno</th>
            <th>Firstname</th>
            <th>lastname</th>
            <th>Company</th>
            <th>Job</th>
            <th>Email</th>
            <th>Phone</th>
            <th>option</th>
        </tr>
        {view.map((q)=>{
                return(
                    <tr>
                        <td>{q._id}</td>
                        <td>{q.firstname}</td>
                        <td>{q.lastname}</td>
                        <td>{q.company}</td>
                        <td>{q.job}</td>
                        <td>{q.email}</td>
                        <td>{q.phone}</td>
                        <td>
                            <button onClick={()=>deltrash(q._id)}>Delete</button>
                        </td>
                    </tr>
                )
                })
            }
      </table>
    </div>
  )
}
