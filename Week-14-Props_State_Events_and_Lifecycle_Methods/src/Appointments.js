// Goal: Create a table that renders allCustomers
// Step 1: Create a table with a thead/tbody. The thead
//         3 th elements: First Name, Last Name, and Appointment Time
// Step 2: Inside of your tbody, create a <tr> element 
//         over this.customersArray and return
//         3 <td> elements, one for firstName, lastName, and appointmentTime
//         Check the README for a .map() hint.
// Step 3: Style it with css using the App.css file!



import React, {Component} from 'react'

export default class Appointments extends Component {
    constructor(props) {
        super(props)
        this.customersArray = props.customers
        console.log(this.customersArray);
        console.log(props)
    }

  render() {
    return  (
        <table>
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Appointment Time</td>
                </tr>
            </thead>
            <tbody>
                {this.customersArray.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.firstName}</td>
                        <td>{customer.lastName}</td>
                        <td>{customer.appointmentTime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
  }
}
