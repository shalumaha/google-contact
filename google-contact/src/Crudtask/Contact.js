import React,{useEffect,useState} from 'react'
import { useActionData, useNavigate } from 'react-router-dom';
import './Trash.css';
import axios from 'axios';

export default function Contact() {
    let [view,setView]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:7000/read').then((s)=>{
        setView(s.data)
    })
  },[]);
  return (
    <div>
      <table className='table' id="trashtable">
        <tr>
            <th>Firstname</th>
            <th>lastname</th>
            <th>Company</th>
            <th>Job</th>
            <th>Email</th>
            <th>Phone</th>
        </tr>
        {view.map((q)=>{
                return(
                    <tr>
                        <td>{q.firstname}</td>
                        <td>{q.lastname}</td>
                        <td>{q.company}</td>
                        <td>{q.job}</td>
                        <td>{q.email}</td>
                        <td>{q.phone}</td>
                    </tr>
                )
                })
            }
      </table>
    </div>
  )
}
