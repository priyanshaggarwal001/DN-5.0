import React, { Component } from "react";

class ComplaintRegister extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employeeName: "",
            complaint: ""
        };
    }

    handleNameChange = (event) => {
        this.setState({
            employeeName: event.target.value
        });
    };

    handleComplaintChange = (event) => {
        this.setState({
            complaint: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        // Generate a random 6-digit reference number
        const referenceNumber = Math.floor(
            100000 + Math.random() * 900000
        );

        alert(
            `Complaint submitted successfully!\n\nReference Number: ${referenceNumber}`
        );

        // Clear the form
        this.setState({
            employeeName: "",
            complaint: ""
        });
    };

    render() {
        return (
            <div style={{ margin: "40px", textAlign: "center" }}>
                <h2>Ticket Raising App</h2>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Employee Name:</label>
                        <br />

                        <input
                            type="text"
                            value={this.state.employeeName}
                            onChange={this.handleNameChange}
                            required
                        />
                    </div>

                    <br />

                    <div>
                        <label>Complaint:</label>
                        <br />

                        <textarea
                            rows="5"
                            cols="40"
                            value={this.state.complaint}
                            onChange={this.handleComplaintChange}
                            required
                        ></textarea>
                    </div>

                    <br />

                    <button type="submit">
                        Submit
                    </button>

                </form>

            </div>
        );
    }
}

export default ComplaintRegister;