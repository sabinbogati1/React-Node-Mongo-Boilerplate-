import React, { Component } from 'react';
import axios from 'axios';



class AdminSignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      displayName:"",
      phoneNumber:"",
      role:""
    }

  }

  onChangeEmail(e) {
    this.setState(
        { email: e.target.value }
    )

    console.log(e.target.value);
}


onChangePassword(e) {
  this.setState(
      { password: e.target.value }
  )

  console.log(e.target.value);
}


onChangeDisplayName(e) {
  this.setState(
      { displayName: e.target.value }
  )

  console.log(e.target.value);
}


onChangePhoneNumber(e) {
  this.setState(
      { phoneNumber: e.target.value }
  )

  console.log(e.target.value);
}


onChangeRole(e) {
  this.setState(
      { role: e.target.value }
  )

  console.log(e.target.value);
}


onSubmit(e) {
    console.log("Email: ", this.state.email);
    console.log("Password: ", this.state.password);
    console.log("name: ", this.state.displayName);
    console.log("phone number: ", this.state.phoneNumber);
    console.log("Role: ", this.state.role);


    axios.post("/api/auth/signup",{
      email: this.state.email,
      password:this.state.password,
      displayName:this.state.displayName,
      phoneNumber: this.state.phoneNumber,
      role: this.state.role
    }).then(()=>{
      console.log("Successfully posted signUp form");
    }).catch((err)=>{
      console.log("Error in posting signUp form");
    })



}




  render() {
    return (
      <div>

        <h1>WELCOME TO ADMIN SIGNUP FORM </h1>

           <div>
              <label>Enter Email: </label>
              <input type="text" onChange={this.onChangeEmail.bind(this)} ref="email" /> <br/> <br/>


              <label>Enter Password: </label>
              <input type="text" onChange={this.onChangePassword.bind(this)} ref="password"  /><br/><br/>


              <label>Enter Display Name: </label>
              <input type="text" onChange={this.onChangeDisplayName.bind(this)} ref="displayName" /><br/><br/>

              <label>Enter Phone Number: </label>
              <input type="text" onChange={this.onChangePhoneNumber.bind(this)} ref="phoneNumber" /><br/><br/>

              <label>Enter Role: </label>
              <input type="text" onChange={this.onChangeRole.bind(this)} ref="role" /><br/><br/>


              <input type="submit" onClick={this.onSubmit.bind(this)} value="Submit"/>



            </div>


        </div>

    );
  }
}

export default AdminSignUp;
