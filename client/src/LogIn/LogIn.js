import React, { Component } from 'react';
import axios from 'axios';
import {  Redirect } from 'react-router-dom';



class LogIn extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      redirectAdmin:false,
      redirectReportAdmin:false,
      redirectRoleNoteFound:false
    };
  }

  onChangeEmail(e){

    this.setState({
        email:e.target.value
    });

    console.log("Email :" , this.state.email);
  }


  onChangePassword(e){

    this.setState({
      password:e.target.value
    });

    console.log("PassWord :" , this.state.password);
  }



  onSubmit(){

    let email = this.state.email;
    let password = this.state.password;

    console.log("email: ", email);
    console.log("password: ", password);

    this.refs.email.value = '';
    this.refs.password.value = '';

    axios.post("/api/auth/login",{
      email: email,
      password: password,

    }).then((response)=>{
      console.log("Successfully Logged In ");
      console.log(" user:", response.data)

      console.log("Role Type :" , response.data.role);

      if( response.data.role === "Admin"){

        this.setState({
          redirectAdmin:true
        })

      }
      else if(response.data.role === "Report Admin")

      this.setState({
        redirectReportAdmin:true
      })
      else{
        redirectRoleNoteFound:true
      }

        //return <Redirect to="/signup/admin" />;


    }).catch((err)=>{
      console.log("Error in posting LogIn  form");
    })


  }




  render() {
    if(this.state.redirectReportAdmin){
       return  <Redirect to="/dashboard/reportAdmin" />;
    }
     if(this.state.redirectAdmin){
      return  <Redirect to="/dashboard/admin" />;
    }

    return (




        <div>

      <div className="container">

<h4> WELCOME TO LOGIN FORM </h4>

  <div className="form-group">
    <label htmlFor="email">Enter Email / User Name:</label>
    {/* id="email" ref="email" onChange={this.onChangeEmail.bind(this)} */}
    <input type="text" className="form-control" id="email" onChange={this.onChangeEmail.bind(this)} ref="email"  />
  </div>
  <div className="form-group">
    <label htmlFor="password">Enter Password:</label>
    {/* ref="password" onChange={this.onChangePassword.bind(this)} */}
    <input type="password" className="form-control" id="password" onChange={this.onChangePassword.bind(this)} ref="password"  />
  </div>

  {/* onClick={this.onSubmit.bind(this)} */}
  <button type="submit" className="btn btn-primary" onClick={this.onSubmit.bind(this)} >Submit</button>

</div>
</div>



    );
  }
}

export default LogIn;
