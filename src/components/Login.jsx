import React,{useState} from 'react'
import axios from 'axios';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password , setPassword] = useState("");
   

    const handleLogin = async (e) =>{
        e.preventDefault();
      try{
        if(!email && !password){
         alert("Please enter email and Password");
         return
        }

      const res = await axios.post("http://localhost:7777/login", // correctly send the api endpoint
        {
            emailId : email,
            password : password,
        }  , {
            withCredentials: true,  // Enable sending cookies with the request
          } 
    )
    console.log(res.data);
      }catch(err){
       console.log(err)
      }
    }


  return (
<>
<div className="flex items-center justify-center ">
  <div className="card bg-primary text-primary-content w-80 shadow-xl">
    <div className="card-body">
      {/* Email input field */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Email ID</span>
        </label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>

      {/* Password input field */}
      <div className="form-control mb-4">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="Enter your password"
          className="input input-bordered"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      {/* Buy Now button */}
      <div className="card-actions justify-end mt-4">
        <button className="btn btn-accent"  type="button" onClick={handleLogin}>Submit</button>
      </div>
    </div>
  </div>
</div>

</>

  )
}

export default Login