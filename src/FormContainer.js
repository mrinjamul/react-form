import React, {Component} from "react"
import FormComponent from "./FormComponent"

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
        console.log(this.state.fullName);
        console.log(this.state.email);
        fetch('http://localhost:8080/users/',{
          method: 'POST',
          headers: {'Content-type':'application/json'},
          body: JSON.stringify({
            "firstName": "",
            "lastName": "",
            "age": "",
            "gender": "",
            "destination": "",
            "isVegan": false,
            "isKosher": false,
            "isLactoseFree": false
          })
        });
        }
        

    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state}
            />
        )
    }
}

export default Form

