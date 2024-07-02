// import { useState } from "react";
// import "./Login.css"

// export default function Form() {
//   // States for registration
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);

//   // Handling the name change
//   const handleName = (e) => {
//     setName(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the email change
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the password change
//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//     setSubmitted(false);
//   };

//   // Handling the form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === "" || email === "" || password === "") {
//       setError(true);
//     } else {
//       setSubmitted(true);
//       setError(false);
//       console.log(name,email, password)
//     }
//   };

//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? "" : "none",
//         }}
//       >
//         <h1>User {name} successfully registered!!</h1>
//       </div>
//     );
//   };

//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? "" : "none",
//         }}
//       >
//         <h1>Please enter all the fields</h1>
//       </div>
//     );
//   };

//   return (
//     <div className="form">
//       <div>
//         <h1>User Registration</h1>
//       </div>

//       {/* Calling to the methods */}
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>

//       <form>
//         {/* Labels and inputs for form data */}
//         <label className="label">Name</label>
//         <input
//           onChange={handleName}
//           className="input"
//           value={name}
//           type="text"
//         />

//         <label className="label">Email</label>
//         <input
//           onChange={handleEmail}
//           className="input"
//           value={email}
//           type="email"
//         />

//         <label className="label">Password</label>
//         <input
//           onChange={handlePassword}
//           className="input"
//           value={password}
//           type="password"
//         />

//         <button onClick={handleSubmit} className="bn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";

const LogIn = () => {
  // states for input
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  // states for the error
  const [formError, setFormError] = useState({
    email: "",
    password: "",
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
      email: "",
      password: "",
    };

    if (!formInput.email && !formInput.password) {
      setFormError({
        ...inputError,
        email: "Enter valid email address",
        password: "Password should not empty",
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

    if (!formInput.password) {
      setFormError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    setFormError(inputError);
    history.push("/");
  };

  const logIn = useHistory();
  const handleSignUp = () => {
    logIn.push("/signup");
  };

  return (
    <div className="App-container">
      <div className="card">
        <div className="card-header">
          <button className="login_title_1">Login</button>
          <button className="sign_title_2" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
        <div className="card-body">
          <form onSubmit={validateFormInput}>
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
            <span className="pwd">forgot password ?</span>

            {/* submit */}

            <input type="submit" className="form_btn" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
