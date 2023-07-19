import React from "react";
export default function CreateAccount(props) {
    const [state, setState] = React.useState({
      email: "",
      password: "",
      cPassword: ""
    });
  
    const [passMatch, setPassMatch] = React.useState(true);
    
  
    React.useEffect(() => {
      validatePassword();
    }, [state]);
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [id]: value
      }));
    };
  
    const validatePassword = () => {
      state.password === state.cPassword
        ? setPassMatch(true)
        : setPassMatch(false);
    };
    
    const createAccount = () =>{
      console.log("createAccount");
      validatePassword();
      
    }
  
    return (
      <div class="login-page">
        <div class="form">
          <input
            aria-label="Email"
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={state.email}
            onChange={handleChange}
            aria-required="true"
          />
  
          <input
            aria-label="Password"
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            aria-required="true"
          />
  
          <input
            aria-label="Confirm Password"
            type="password"
            className={`form-control ${passMatch ? "" : "input-error-border"}`}
            id="cPassword"
            placeholder="Confirm Password"
            value={state.cPassword}
            onChange={handleChange}
            aria-required="true"
            aria-invalid={passMatch ? true : false}
          />
  
          <div className="input-error">
            {state.password !== state.cPassword ? "" : ""}
          </div>
          <div className="input-error">
            {passMatch ? "" : "Error: Passwords do not match"}
          </div>
  
          <button aria-label="Create Account" onClick={createAccount}>Create Account</button>
        </div>
      </div>
    );
  }
  

  

  