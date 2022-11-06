// import logo from './logo.svg';
// import './App.css';
// import Learning from './components/Learning';
// import Hook from './components/Hook';
// import Check from './components/Check';
import React from "react";
class App extends React.Component{

  state= {
    email:"",
    password:"",
    emailError:'',
    passwordError:'',
    details:""
  }
 
  validate(){
    if(!this.state.email > 0 && !this.state.password > 0){
     this.setState({emailError:"Email and Password Required"})
    }
    else if(!this.state.email > 0){
      this.setState({emailError:"Email Required"})
    }
    else if(!this.state.password > 0){
      this.setState({passwordError:"Password Required"})
    }
    else{
      return true;
    }
  }
  
  formSubmit = (e) =>{
    e.preventDefault();
    if(this.validate()){
alert("Form submit is Done!")
    }
  }

  render(){ 
  return(
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt='logo'/>
      
      </header> */}
      <h1>Login Panel</h1>


    <div>
      <form onSubmit={this.formSubmit} >
        <div class="form-group" style={{marginLeft:200}}>
          <label>Email:</label><br></br>
          <input type="email" name="email" onChange={(event)=>{this.setState({email:event.target.value})}}></input><br></br>
          <strong style={{color:'red'}}>{this.state.emailError}</strong><br></br>
          <label>Password:</label><br></br>
          <input type="password" name="password" onChange={(event)=>{this.setState({password:event.target.value})}}></input><br></br>
          <strong style={{color:'red'}}>{this.state.passwordError}</strong><br></br>
          <label>Details:</label><br></br>
          <textarea onChange={(event)=>{this.setState({details:event.target.value})}}>
            Write on Here
          </textarea ><br></br>
          <h6>{this.state.details}</h6>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}
}

export default App;
