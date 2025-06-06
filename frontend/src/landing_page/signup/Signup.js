

function Signup() {
    return ( 
        <div className="container mt-5 p-5 ">
            <div className="row ">
                <div className="col-4">
                    <img src="media/images/signup.png"/>
                </div>
                <div className="col-2 m-5"></div>
                <div className="col-5 p-5 ">
                  <h1>Signup now</h1>
                  <p className="text-muted fs-5">Or track your existing application</p>
                  <form className="p-3" >
                    <div className="mb-3 input-group ">
                         <input
                  type="text"
                  className="form-control "
                  name="name"
                  placeholder="Full Name"
                  
                //   value={formData.name}
                //   onChange={handleChange}
                  required
                />
                    </div>
                     <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                // value={formData.email}
                // onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                // value={formData.password}
                // onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              {/* {isSignup ? "Sign Up" : "Login"} */}
              Signup
            </button>
                  </form>
                    
                </div>
            </div>
        </div>
     );
}

export default Signup;

