import React from "react";
import {signInWithGooglePopup,  createUserDocumentFromAuth} from './Utility/Firebase/FirebaseUtility.js'

export default function SignIn() {
  const [name, setName] = React.useState("");

  const handleNameChange = (e) => {
    const {name, value} = e.target
    setName(value)
    console.log(name);
    console.log(value);
  }
  
  const Sign = async () => {
  
      const {user} = await signInWithGooglePopup();
      const response = await createUserDocumentFromAuth(user);
      console.log('Response: ', response);
  }
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col md-6">
                <h2>I already have an account</h2>
                <form onSubmit={() => {}}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  value={name}
                  name="email"
                 onChange={handleNameChange} 
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"

                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  
                />
              </div>
              
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary">
                SignIn
              </button>
              <button type="submit" className="ms-3 btn btn-success" onClick={Sign}>
                Google Account
              </button>
              </form>
          </div>
          <div className="col md-6">
                <h2>I do not have an account</h2>
                <form onSubmit={() => {}}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  name="email"
                 onChange={handleNameChange} 
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Display Name
                </label>
                <input
                placeholder="Display Name"
                 onChange={handleNameChange} 
                  type="text"
                  class="form-control"
                  
                  id="exampleInputEmail1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  aria-required="true"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Confirm Password"
                  aria-required="true"
                  
                  
                />
                
              </div>
            
              
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
              
              </form>
          </div>
        </div>
      </div>
    </div>

  );
  

}