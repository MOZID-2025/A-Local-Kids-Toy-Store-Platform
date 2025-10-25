import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full  shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <h1 className="text-2xl font-bold text-center">Login now</h1>
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Email" />
                  <label className="label">Password</label>
                  <input
                    type="password"
                    className="input"
                    placeholder="Password"
                  />
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                  <button className="btn btn-outline">
                    <FcGoogle size={24} />
                    Login with Google
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
