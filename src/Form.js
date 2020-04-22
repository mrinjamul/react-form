import React, { Component } from "react";


class Form extends Component {
  constructor() {
    super()
    this.state = {
    users: [{
      fullName: "",
      email: ""
    }]
    }
}

handleChange = (event) => {
  const {name, value, type, checked} = event.target
  type === "checkbox" ? 
      this.setState({
          [name]: checked
      })
  :
  this.setState({
      [name]: value
  }) 
}
handleSubmit = (event) => {
event.preventDefault();
console.log(this.state.fullName);
console.log(this.state.email);
fetch('http://localhost:8080/users/',{
  method: 'POST',
  headers: {'Content-type':'application/json'},
  body: JSON.stringify({
    "fullName": this.state.fullName,
    "email": this.state.email
  })
});
}


  render() {
    return (
     <div>
        <form onSubmit={this.handleSubmit}>
        <input 
              name="fullName" 
              value={this.state.users.name} 
              onChange={this.handleChange} 
              placeholder="Full Name" 
          />
          <br />

                    
          <input 
              name="email" 
              value={this.state.users.email}
              onChange={this.handleChange} 
              placeholder="Email" 
            />
          <br />
        <button type="Submit">Add</button>
        </form>
     </div>
    );
  }
}
export default Form
