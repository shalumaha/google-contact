import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Crud.css';
import { FaUserLarge,FaWandMagicSparkles } from 'react-icons/fa6';
import {FaSearch} from 'react-icons/fa';
import {BsFillPatchQuestionFill,BsFillGearFill,BsPlusLg,BsPerson,BsFillTrashFill,BsTrash3Fill} from 'react-icons/bs';
import {GiBackwardTime} from 'react-icons/gi';
import {BiArchiveIn,BiEdit} from 'react-icons/bi';
import {CiImport} from 'react-icons/ci';
import axios from 'axios';
import { API } from './API';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const[show,setshow]=useState(false)
    const navi=useNavigate();
    let [view,setView]=useState([]);


    function create(){
        
        navi('/Create')
    }
    function trash(){
        navi('/Trash')
    }
    function contact(){
        navi('/Contact')
    }

    useEffect(()=>{
        axios.get('http://localhost:7000/read').then((s)=>{
            setView(s.data)
        })
    },[]);

    function del(a,b,c,d,e,f,g)
    {   
        axios.post('http://localhost:5000',{firstname:b,lastname:c,company:d,job:e,email:f,phone:g});
        axios.delete(`${API}/${a}`).then(()=>{
            axios.get('http://localhost:7000/read').then((s)=>{
                setView(s.data)
            })
        })
        alert("Data deleted")
    }
    function edit(a,b,c,d,e,f,g)    
    {
        localStorage.setItem("_id",a);
        localStorage.setItem("firstname",b);
        localStorage.setItem("lastname",c);
        localStorage.setItem("company",d);
        localStorage.setItem("job",e);
        localStorage.setItem("email",f);
        localStorage.setItem("phone",g);
        navi('/update')   
    }
    function show1(){
        document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('left').classList.toggle('active');
        setshow(!show)
    }
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-3'>
                <button title='Main Menu' id="line" onClick={show1} >
                    <div className='menu1'></div>
                    <div className='menu1'></div>
                    <div className='menu1'></div>
                </button>
            </div>
            <div className='col-sm-2'>
                <p><FaUserLarge/><span>Contacts</span></p>
            </div>
                
            <div className='col-sm-6' id="search">
                <div className="input-group mb-3">
                <span className="input-group-text" title='Search' id='s' ><FaSearch/></span>
                <input type="text" className="form-control" placeholder='Search' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                </div>
            </div>
            <div className='col-sm-1' id="righttop">
                <p title='Help menu'><BsFillPatchQuestionFill/></p>
                <p id="setting" title='Setting menu'><BsFillGearFill/></p>
            </div>
        </div>
        <div id="sidebar" className='button'>
            <button id="contactbutton" title='Add new contact' onClick={create}><BsPlusLg id="plus"/>Create contact</button>
            <ul type="none">
                <b><li><button id="list" onClick={contact}><BsPerson id='list1'/>Contact</button></li></b>
                {/* <li><button id="list"><GiBackwardTime id='list1'/>Frequent</button></li>
                <li><button id="list"><BiArchiveIn id='list1'/>Othercontact</button></li></b> */}
            </ul>
            <p id="heading"><b>Fix & manage</b></p>
            <ul type="none">
                <b><li><button id="list"><FaWandMagicSparkles id='list1'/>Merge & fix</button></li>
                <li><button id="list"><CiImport id='list1'/>Import</button></li>
                <li><button id="list" onClick={trash}><BsFillTrashFill id='list1' />Trash</button></li></b>
            </ul>
        </div>
        
        <div className='tableleft'>
            <table className='table' id="left">
                <tr>
                    <th>Name</th>
                    <th>Phone number</th>
                </tr>
                {view.map((q)=>{
                    return(
                        <tr id="edit">
                            <td>{q.firstname}</td>
                            <td>{q.phone}</td>
                            <td >
                            <button id="del" onClick={()=>del(q._id,q.firstname,q.lastname,q.company,q.job,q.email,q.phone)}><BsTrash3Fill id="btn"/></button>
                            <button id="del" onClick={()=>edit(q._id,q.firstname,q.lastname,q.company,q.job,q.email,q.phone)}><BiEdit/></button>
                            </td>
                            
                        </tr>
                    )
                    })
                 }
                    
                
            </table>
            <button id="bottombutton" title='Add new contact' onClick={create}><BsPlusLg id="plus"/></button>
        </div>
         {show &&
            <div className='minimize' id="minimize">
                <ul type="none">
                <b><li><button id="list"><BsPerson id='list1'/>Contact</button></li>
                <li><button id="list"><GiBackwardTime id='list1'/>Frequent</button></li>
                <li><button id="list"><BiArchiveIn id='list1'/>Othercontact</button></li></b>
            </ul>
            <p id="heading"><b>Fix & manage</b></p>
            <ul type="none">
                <b><li><button id="list"><FaWandMagicSparkles id='list1'/>Merge & fix</button></li>
                <li><button id="list"><CiImport id='list1'/>Import</button></li>
                <li><button id="list"><BsFillTrashFill id='list1'/>Trash</button></li></b>
            </ul>
            </div>
        } 
    </div>
  )
}
