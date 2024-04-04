import  express, { response }  from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import multer from 'multer'
import path from "path";



const router=express.Router()
 

router.post('/adminlogin',(req,res)=>{
    // console.log(req.body);
    const sql="SELECT * FROM admin WHERE email= ? and password= ?"
    con.query(sql,[req.body.email,req.body.password],(err,result)=>{
        if(err) return res.json({loginStatus:false,Error:"Query error"})
        if(result.length>0){
            const email=result[0].email
            const token=jwt.sign({role:"admin",email:email},"jwt_secret_key",{expiresIn:"1d"});
            res.cookie('token',token);
            return res.json({loginStatus:true})
        }
        else{
            return res.json({loginStatus:false,Error:"Email or Password is wrong"})
        }
    }
    )

})

router.post("/add_category",(req,res)=>{
    const sql= "INSERT INTO category (`name`) values(?)"
    con.query(sql,[req.body.category],(err,result)=>{
      if(err){
       
        return res.json({Status:false,Error:"Query Error"})
      }
      else{
        return res.json({Status:true,result})
      }
    })
})


router.get('/category',(req,res)=>{
    // console.log(req.body);
    const sql="SELECT * FROM category"
    con.query(sql,(err,result)=>{
        if(err) return res.json({Status:false,Error:"Query error"})
        
        else{
            return res.json({Stauts:true,Result:result})
        }
    }
    )

})

router.post("/add_employee",(req,res)=>{
    const sql= `INSERT INTO employee (name,email,password,address,salary,image,category_id) values(?)`
   
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
       
            return res.json({Status:false,Error:"Query Error hass paword"})
          }else{
            const values=[
                req.body.name,
                req.body.email,
                hash,
                req.body.address,
                req.body.salary,
                req.body.image,
                req.body.category_id,
            ]

            con.query(sql,[values],(err,result)=>{
                if(err){
                 
                  return res.json({Status:false,Error:err})
                }
                else{
                  return res.json({Status:true,result})
                }
              })
          }

    })
     
    
})



export {router as adminRouter}