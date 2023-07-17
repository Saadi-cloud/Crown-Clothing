import React, { Fragment } from "react";
import {signInWithGooglePopup,  createUserDocumentFromAuth} from './Utility/Firebase/FirebaseUtility.js'



    


export default function SignIn() {
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
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
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
          </div>
        </div>
      </div>
    </div>

  );
  
}