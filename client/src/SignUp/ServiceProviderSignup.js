import React, { Component } from 'react';
import axios from 'axios';



class ServiceProviderSignup extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      displayName:"",
      phoneNumber:"",
      providedServiceType:""
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


onChangeprovidedServiceType(e) {
  this.setState(
      { providedServiceType: e.target.value }
  )

  console.log(e.target.value);
}


onSubmit() {
    console.log("Email: ", this.state.email);
    console.log("Password: ", this.state.password);
    console.log("name: ", this.state.displayName);
    console.log("phone number: ", this.state.phoneNumber);
    console.log("providedServiceType: ", this.state.providedServiceType);
    let email = this.state.email;
    let password= this.state.password;
    let displayName=this.state.displayName;
    let phoneNumber = this.state.phoneNumber
    let providedServiceType = this.state.providedServiceType;

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
    this.refs.providedServiceType.value = '';

    axios.post("/api/auth/signup/serviceProvider",{
      email: email,
      password: password,
      displayName: displayName,
      phoneNumber: phoneNumber ,
      providedServiceType: providedServiceType
    }).then(()=>{
      console.log("Successfully posted signUp form");

    }).catch((err)=>{
      console.log("Error in posting signUp form");
    })



}




  render() {
    return (
      // <div>

      //   <h3>WELCOME TO SERVICE PROVIDER SIGNUP FORM </h3>

      //      <div>
      //         <label>Enter Email: </label>
      //         <input type="text" onChange={this.onChangeEmail.bind(this)} ref="email" /> <br/> <br/>


      //         <label>Enter Password: </label>
      //         <input type="text" onChange={this.onChangePassword.bind(this)} ref="password"  /><br/><br/>


      //         <label>Enter Display Name: </label>
      //         <input type="text" onChange={this.onChangeDisplayName.bind(this)} ref="displayName" /><br/><br/>

      //         <label>Enter Phone Number: </label>
      //         <input type="text" onChange={this.onChangePhoneNumber.bind(this)} ref="phoneNumber" /><br/><br/>

      //         <label>Enter Provided Service Type: </label>
      //         <input type="text" onChange={this.onChangeprovidedServiceType.bind(this)} ref="providedServiceType" /><br/><br/>


      //         <input type="submit" onClick={this.onSubmit.bind(this)} value="Submit"/>



      //       </div>


       // </div>

       <div class="container">
  <h2>Form control: input</h2>
  <p>The form below contains two input elements; one of type text and one of type password:</p>
  <form>
    <div class="form-group">
      <label for="usr">Name:</label>
      <input type="text" class="form-control" id="usr"/>
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd"/>
    </div>
  </form>
</div>

    );
  }
}

export default ServiceProviderSignup;
