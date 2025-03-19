import React, { useState } from "react";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      const [formErrors, setFormErrors] = useState({});

      const handleChangeForm = (event) => {
        const value = event.target.value;
        const fieldName = event.target.name;
    
        setFormValues((prevValues) => ({
            ...prevValues,
            [fieldName]: value,
        }));
      };

      const validateForm = () => {
        let errors = {};

        if (!formValues.name.trim()) {
            errors.name = "Name is required";
        }

        if (!formValues.username.trim()) {
            errors.username = "Username is required";
        } else if (/\s/.test(formValues.username)) {
            errors.username = "Username cannot contain spaces";
        }

        if (!formValues.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formValues.email)) {
            errors.email = "Invalid email format";
        }

        if (!formValues.password.trim()) {
            errors.password = "Password is required";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formValues.password)) {
            errors.password = "Password must be powerful";
        }

        if (!formValues.confirmPassword.trim()) {
            errors.confirmPassword = "Confirm Password is required";
        } else if (formValues.confirmPassword !== formValues.password) {
            errors.confirmPassword = "Passwords do not match";
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (validateForm()) {
            alert("Form submitted successfully!\n" + JSON.stringify(formValues, null, 2));
            console.log("Form submitted successfully!", formValues);
            navigate("/");
        }
    };
    
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formValues.name}
                        name="name"
                        onChange={handleChangeForm}
                        required />
                        {formErrors.name && <p className="text-danger">{formErrors.name}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={formValues.username}
                        name="username"
                        onChange={handleChangeForm}
                        required />
                        {formErrors.username && <p className="text-danger">{formErrors.username}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formValues.email}
                        name="email"
                        onChange={handleChangeForm}
                        required />
                        {formErrors.email && <p className="text-danger">{formErrors.email}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={formValues.password}
                        name="password"
                        onChange={handleChangeForm}
                        required />
                        {formErrors.password && <p className="text-danger">{formErrors.password}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={formValues.confirmPassword}
                        name="confirmPassword"
                        onChange={handleChangeForm}
                        required />
                        {formErrors.confirmPassword && <p className="text-danger">{formErrors.confirmPassword}</p>}
                </div>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    )
}
    

export default Register;
