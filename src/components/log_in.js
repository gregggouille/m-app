import React from "react";

const Login = () => {
  return (
    <>
      <form>
        <div>Login</div>
        <label>
          username :
          <input type="text" />
        </label>
        <label>
          Email :<input type="email" />
        </label>
        <label>
          PassWord: <input type="password" />
        </label>
      </form>
    </>
  );
};

export default Login;
