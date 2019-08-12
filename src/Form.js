import React, {Component} from "react"


class Form extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
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
        console.log(this.state);
        fetch('http://localhost:8080/users/',{
          method: 'POST',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify({
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "age": this.state.age,
            "gender": this.state.gender,
            "destination": this.state.destination,
            "isVegan": this.state.isVegan,
            "isKosher": this.state.isKosher,
            "isLactoseFree": this.state.isLactoseFree
          })
        });
        console.log("Updated");
        }
        

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <input 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                    placeholder="First Name" 
                />
                <br />
                
                <input 
                    name="lastName" 
                    value={this.state.lastName}
                    onChange={this.handleChange} 
                    placeholder="Last Name" 
                />
                <br />
                
                <input 
                    name="age" 
                    value={this.state.age}
                    onChange={this.handleChange} 
                    placeholder="Age" 
                />
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                
                <br />
                
                <select 
                    value={this.state.destination} 
                    name="destination" 
                    onChange={this.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan}
                    /> Vegan?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.isKosher}
                    /> Kosher?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        checked={this.state.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />
                
                <button type="Submit">Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {this.state.firstName} {this.state.lastName}</p>
            <p>Your age: {this.state.age}</p>
            <p>Your gender: {this.state.gender}</p>
            <p>Your destination: {this.state.destination}</p>
            <p>Your dietary restrictions:</p>
            
            <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            
            </div>

        )
    }
}

export default Form

