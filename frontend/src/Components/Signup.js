import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom';

const Signup = () => {
// const history = useHistory();
  const [user, setUser] = useState({
    name: " ", email: " ", phone: " ", work: " ", password: " ", cpassword: ""
  });
  let name, value;

  const handleinputs = (e) => {

    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }
const PostData = async(e) => {
e.preventDefault();
const {name, email, phone, work, password, cpassword} = user;
 const resp = await fetch('/register',{
  method:"POST",
  headers:{
    "Content-Type" : "application/json"
  },
  body: JSON.stringify({
    name, email, phone, work, password, cpassword
  })
 });

 const data = await resp.json();
if(data.status === 422 || !data){
  window.alert("invalid registration");
  console.log("invalid");
}
else{
  window.alert("registration successful");
  console.log("success");

  // history.push("/login");
}


}

  return (
    <div className='register'>

<form method='POST' id="register-form">

      <input className="inputbox" type="text" name="name"
        value={user.name} onChange={handleinputs} placeholder="Enter name" />

      <input className="inputbox" type="text" name="email"
        value={user.email} onChange={handleinputs} placeholder="Enter email" />

      <input className="inputbox" type="number" name="phone"
        value={user.phone} onChange={handleinputs} placeholder="Enter phone" />

      <input className="inputbox" type="text" name="work"
        value={user.work} onChange={handleinputs} placeholder="Enter work" />

      <input className="inputbox" type="password" name="password" id="password"
        value={user.password} onChange={handleinputs} placeholder="Enter password" />

      <input className='inputbox' type="password" name="cpassword" id="cpassword"
        value={user.cpassword} onChange={handleinputs} placeholder="Enter cpassword" />


      <input className='appbutton' type="submit" name="signup" id="signup" value="register" onClick={PostData} />
</form>
    </div>
  )
}

export default Signup;