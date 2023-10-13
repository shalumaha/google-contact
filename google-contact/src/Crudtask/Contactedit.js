import 'bootstrap/dist/css/bootstrap.min.css';
import './Create.css';
import {BsPerson,BsFillTelephoneFill} from 'react-icons/bs';
import {FaTrello,FaBirthdayCake} from 'react-icons/fa';
import {CiMail} from 'react-icons/ci';
import validator from 'validator';
import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { useActionData, useNavigate } from 'react-router-dom';
import { API } from './API';
export default function Contactedit() {
    const [_id,setId]=useState(0)
    const[fname,setfname]=useState('');
    const[lname,setlname]=useState('');
    const[company,setcompany]=useState('');
    const[job,setjob]=useState('');
    const[email,setemail]=useState('');
    const[phone,setphone]=useState('');
    const navi=useNavigate();

    const handleSubmit = (e) => 
    {
    e.preventDefault();
    var letters = /^[A-Za-z\s]+$/;
   
    if(fname==='')
    {
        let error = document.getElementById('name_error');
        error.innerHTML = "fill the first name";
    }
    else if(!(fname.match(letters))){
        let error1 = document.getElementById('name_error');
        error1.innerHTML = "enter alphabet only";
     }
    else{
        document.getElementById('name_error').innerHTML = '';
    }

    if(lname==='')
    {
        let error = document.getElementById('name1_error');
        error.innerHTML = "fill the last name";
    }
    else if(!(fname.match(letters))){
        let error1 = document.getElementById('name1_error');
        error1.innerHTML = "enter alphabet only";
     }
    else{
        document.getElementById('name1_error').innerHTML = '';
    }

    if(company==='')
    {
        let error = document.getElementById('company_error');
        error.innerHTML = "fill the company name";
    }
    else if(!(fname.match(letters))){
        let error1 = document.getElementById('company_error');
        error1.innerHTML = "enter alphabet only";
     }
    else{
        document.getElementById('company_error').innerHTML = '';
    }

    if(job==='')
    {
        let error = document.getElementById('job_error');
        error.innerHTML = "fill the job name";
    }
    else if(!(fname.match(letters))){
        let error1 = document.getElementById('job_error');
        error1.innerHTML = "enter alphabet only";
     }
    else{
        document.getElementById('job_error').innerHTML = '';
    }

    if(email==='')
    {
        let error = document.getElementById('email_error');
        error.innerHTML = "enter the email";
    }
    else if(!(validator.isEmail(email))){
        let error1 = document.getElementById('email_error');
        error1.innerHTML = "enter email correctly";
     }
    else{
        document.getElementById('email_error').innerHTML = '';
    }

    if(phone==='')
    {
        let error = document.getElementById('phone_error');
        error.innerHTML = "enter the phone number";
    }
    else if(!(validator.isMobilePhone(phone))){
        let error1 = document.getElementById('phone_error');
        error1.innerHTML = "enter phone number correctly";
     }
    else if(phone.length !==10){
        let error2 = document.getElementById('phone_error');
        error2.innerHTML = "enter phone number correctly";
    }
    else{
        document.getElementById('phone_error').innerHTML = '';
    }

    if(fname!=='' && lname!=='' && company!==''&& job!==''&& email!=='' && phone!==''){  
        axios.put(`${API}/${_id}`,{firstname:fname,lastname:lname,company:company,job:job,email:email,phone:phone});
        alert("Contact Edited successfully")  
        setfname('');
        setlname('');
        setcompany('');
        setjob('');
        setemail('');
        setphone('');
        
         }
    }    
    
    useEffect(()=>{
        setId(localStorage.getItem("_id"));
        setfname(localStorage.getItem("firstname"));
        setlname(localStorage.getItem("lastname"));
        setcompany(localStorage.getItem("company"));
        setjob(localStorage.getItem("job"));
        setemail(localStorage.getItem("email"));
        setphone(localStorage.getItem("phone"));
    },[])

    function removewarning() {
        document.getElementById( "name_error").innerHTML = "";
    }
    function removewarning1() {
        document.getElementById( "name1_error").innerHTML = "";
    }
    function removewarning2() {
        document.getElementById( "company_error").innerHTML = "";
    }
    function removewarning3() {
        document.getElementById( "job_error").innerHTML = "";
    }
    function removewarning4() {
        document.getElementById( "email_error").innerHTML = "";
    }
    function removewarning5() {
        document.getElementById( "phone_error").innerHTML = "";
    }

    function back(){
        navi('/')
    }
  return (
    <div className='container'>
       <form onSubmit={handleSubmit}>                
            <table className="table" id="createtable">
                    <tr>
                        <td><h1>Edit details</h1></td>
                    </tr>
                    <tr>
                        <td><label><BsPerson id="icon"/></label>
                        <input type='text' placeholder='First name' value={fname} onChange={(e)=>setfname(e.target.value)} onKeyUp={removewarning}/>
                        <span id="name_error" className="error text-danger"  ></span></td>
                    </tr>
                    <tr>
                        <td>
                        <input type='text' id="space" placeholder='Last name' value={lname} onChange={(e)=>setlname(e.target.value)} onKeyUp={removewarning1}/>
                        <span id="name1_error" className="error text-danger"></span></td>
                    </tr>
                    <tr>
                        <td><label><FaTrello id="icon"/></label>
                        <input type='text' placeholder='Company' value={company} onChange={(e)=>setcompany(e.target.value)} onKeyUp={removewarning2}/>
                        <span id="company_error" className="error text-danger"></span></td>
                    </tr>
                    <tr>
                        <td>
                        <input type='text' id="space" placeholder='Job title' value={job} onChange={(e)=>setjob(e.target.value)} onKeyUp={removewarning3}/>
                        <span id="job_error" className="error text-danger"></span></td>
                    </tr>
                    <tr>
                        <td><label><CiMail id="icon"/></label>
                        <input type='text' placeholder='Email' value={email} onChange={(e)=>setemail(e.target.value)} onKeyUp={removewarning4}/>
                        <span id="email_error" className="error text-danger"></span></td>
                    </tr>
                    <tr>
                        <td><label><BsFillTelephoneFill id="icon"/></label>
                        <input type='text' placeholder='Phone' value={phone} onChange={(e)=>setphone(e.target.value)} onKeyUp={removewarning5}/>
                        <span id="phone_error" className="error text-danger"></span></td>
                    </tr>
                    <tr>
                        <button type='submit' id="createbutton">Save</button>
                        <button type='submit' id="createbutton" onClick={back}>Back</button>
                    </tr>
            </table>
        </form>
        
    </div>
  )
}
