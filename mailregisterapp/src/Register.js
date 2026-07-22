import React, { Component } from "react";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            password: "",
            errors: {}
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    validate = () => {

        let errors = {};

        // Name Validation
        if (this.state.name.length < 5) {
            errors.name = "Name should have at least 5 characters";
        }

        // Email Validation
        if (
            !this.state.email.includes("@") ||
            !this.state.email.includes(".")
        ) {
            errors.email = "Enter a valid email";
        }

        // Password Validation
        if (this.state.password.length < 8) {
            errors.password = "Password should have at least 8 characters";
        }

        this.setState({ errors });

        return Object.keys(errors).length === 0;
    };

    handleSubmit = (event) => {

        event.preventDefault();

        if (this.validate()) {

            alert("Registration Successful!");

            this.setState({
                name: "",
                email: "",
                password: "",
                errors: {}
            });

        }

    };

    render() {

        return (

            <div style={{ textAlign: "center", marginTop: "30px" }}>

                <h2>Mail Registration Form</h2>

                <form onSubmit={this.handleSubmit}>

                    <div>

                        <label>Name</label>

                        <br />

                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                        <br />

                        <span style={{ color: "red" }}>
                            {this.state.errors.name}
                        </span>

                    </div>

                    <br />

                    <div>

                        <label>Email</label>

                        <br />

                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />

                        <br />

                        <span style={{ color: "red" }}>
                            {this.state.errors.email}
                        </span>

                    </div>

                    <br />

                    <div>

                        <label>Password</label>

                        <br />

                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <br />

                        <span style={{ color: "red" }}>
                            {this.state.errors.password}
                        </span>

                    </div>

                    <br />

                    <button type="submit">

                        Register

                    </button>

                </form>

            </div>

        );

    }

}

export default Register;