import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./signup.css";

const SignUp = () => {
  // states for input
  const [formInput, setFormInput] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // state for the error
  const [formError, setFormError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // handling the input
  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  // handling the validation

  const history = useHistory();

  const validateFormInput = (event) => {
    event.preventDefault();

    let inputError = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (!formInput.fullName && !formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        fullName: "Enter your full name",
        email: "Enter valid email address",
        password: "Password should not empty",
      });
      return;
    }

    if (!formInput.fullName) {
      setFormError({
        ...inputError,
        fullName: "Enter your full name",
      });

      return;
    }

    if (!formInput.email) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
      });

      return;
    }

    if (formInput.confirmPassword !== formInput.password) {
      setFormError({
        ...inputError,
        confirmPassword: "Password and confirm password should be the same",
      });

      return;
    }

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    if (!formInput.password || !passwordPattern.test(formInput.password)) {
      setFormError({
        ...inputError,
        password:
          "Password should be at least 5 characters and contain letters and numbers",
      });
      return;
    }

    setFormError(inputError);
    history.push("/");
  };

  const logIn = useHistory();
  const handleLogIn = () => {
    logIn.push("/login");
  };

  // const handleSubmit = (e) =>{
  //   e.preventDefault()
  //   console.log(formInput)
  // }

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <button className="sign_title">Sign Up</button>
          <button className="login_title" onClick={handleLogIn}>
            Login
          </button>
        </div>
        <div className="card-body">
          <form onSubmit={validateFormInput}>
            
            {/* Full name  */}
            <p className="label">full Name</p>
            <input
              value={formInput.fullName}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="fullName"
              type="text"
              className="input"
              placeholder="Enter your name"
            />
            <p className="error-message">{formError.fullName}</p>
           

            {/* Email */}
            <p className="label">Email</p>
            <input
              value={formInput.email}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="email"
              type="email"
              className="input"
              placeholder="Enter Email"
            />
            <p className="error-message">{formError.email}</p>

            {/* Password */}

            <p className="label">Password</p>
            <input
              value={formInput.password}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />

            <p className="error-message">{formError.password}</p>

            {/* confirm password */}

            <p className="label">Confirm Password</p>
            <input
              value={formInput.confirmPassword}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="confirmPassword"
              type="password"
              className="input"
              placeholder="Confirm Password"
            />
            <p className="error-message">{formError.confirmPassword}</p>

            {/* submit */}

            <input type="submit" className="form_btn" value="Sign Up" />
          </form>

          <div className="form-footer">
            <h8>
              By signing up, you agree to our Terms, Data policy and Cookies
              policy.
            </h8>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
