

function Login() {
    return ( 
        <div className="container mt-5 p-5 ">
            <div className="row ">
                <div className="col-4">
                    <img src="media/images/signup.png"/>
                </div>
                <div className="col-2 m-5"></div>
                <div className="col-5 p-5 ">
                  <h1>Login</h1>
                  <form className="p-3" >
                     <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
                  </form>
                    
                </div>
            </div>
        </div>
     );
}

export default Login;

