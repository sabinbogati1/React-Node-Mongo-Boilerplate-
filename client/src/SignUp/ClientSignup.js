import React, { Component } from 'react';
import axios from 'axios';



class ClientSignUp extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      displayName:"",
      phoneNumber:"",
      address:""
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

onChangeAddress(e) {
  this.setState(
      { address: e.target.value }
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


onSubmit() {
    console.log("Email: ", this.state.email);
    console.log("Password: ", this.state.password);
    console.log("name: ", this.state.displayName);
    console.log("phone number: ", this.state.phoneNumber);
    console.log("Role: ", this.state.role);
    let email = this.state.email;
    let password= this.state.password;
    let displayName=this.state.displayName;
    let phoneNumber = this.state.phoneNumber
    let address = this.state.address;

    // this.setState({
    //     email:"",
    //     password:"",
    //     displayName:"",
    //     phoneNumber:"",
    //     role:""
    //   });

    this.refs.email.value = '';
    this.refs.password.value = '';
    this.refs.displayName.value = '';
    this.refs.phoneNumber.value = '';
    this.refs.address.value = '';

    axios.post("/api/auth/signup/client",{
      email: email,
      password: password,
      displayName: displayName,
      phoneNumber: phoneNumber ,
      address: address
    }).then(()=>{
      console.log("Successfully posted signUp form");

    }).catch((err)=>{
      console.log("Error in posting signUp form");
    })



}




  render() {
    return (
      <div>

        <h3>WELCOME TO CLIENT SIGNUP FORM </h3>

           <div>
              <label>Enter Email: </label>
              <input type="text" onChange={this.onChangeEmail.bind(this)} ref="email" /> <br/> <br/>


              <label>Enter Password: </label>
              <input type="text" onChange={this.onChangePassword.bind(this)} ref="password"  /><br/><br/>


              <label>Enter Address: </label>
              <input type="text" onChange={this.onChangeAddress.bind(this)} ref="address" /><br/><br/>

              <label>Enter Phone Number: </label>
              <input type="text" onChange={this.onChangePhoneNumber.bind(this)} ref="phoneNumber" /><br/><br/>

              <label>Enter Display Name: </label>
              <input type="text" onChange={this.onChangeDisplayName.bind(this)} ref="displayName" /><br/><br/>


              <input type="submit" onClick={this.onSubmit.bind(this)} value="Submit"/>



            </div>


        </div>

    );
  }
}

export default ClientSignUp;
