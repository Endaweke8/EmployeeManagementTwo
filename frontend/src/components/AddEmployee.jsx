import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AddEmployee = () => {
  const [category,setCategory]=useState([]);
  const [employee,setEmployee]=useState({
    name:"",
    email:"",
    password:"",
    address:"",
    salary:"",
    
    image:"",
    category_id:1

  })



  useEffect(()=>{
      axios.get("http://localhost:3000/auth/category")
      .then(res=>{
        setCategory(res.data.Result)
      })
      .catch(err=>console.log(err))
  },[]);

  
  

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3000/auth/add_employee",employee).
    then(result=>{
    //  if(result.data.Status){
    //   // navigate("/dashboard/employees");
    //  }else{
    //  alert(result.data.Error)
    //  }
    console.log("Posted")
    }).
    catch(error=>console.log(error))
   }

  return (
    <div>
    <div className='flex justify-center items-center my-10'>
      <h1 className='text-2xl font-bold'>Add Category</h1>
    </div>
    <form onSubmit={handleSubmit}  class="max-w-sm mx-auto">
      {/* {error && error} */}
      {/* <div class="mb-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" onChange={(e)=>setValues({...values,email:e.target.value})} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
      </div> */}
      <div class="mb-5">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
        <input type="text" onChange={(e)=>setEmployee({...employee,name:e.target.value})} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div class="mb-5">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" onChange={(e)=>setEmployee({...employee,email:e.target.value})} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div class="mb-5">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" onChange={(e)=>setEmployee({...employee,password:e.target.value})} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div class="mb-5">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
        <input type="text" onChange={(e)=>setEmployee({...employee,salary:e.target.value})} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div class="mb-5">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
        <input type="text" onChange={(e)=>setEmployee({...address,name:e.target.value})} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
    
      <div class="mb-5">
        <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Image</label>
        <input type="file" onChange={(e)=>setEmployee({...address,image:e.target.value})} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
      </div>
      <div class="mb-5">
      <label for="category" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Category</label>
  <select id="category" onChange={(e)=>setEmployee({...address,category_id:e.target.value})} class="block w-full p-2 mb-6 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
   {category.map(c=>{
    return <option className='text-black' value={c.id}>{c.name}</option>
   })}
    
  </select>
      </div>
       
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
    </form>
    </div>
  )
}
