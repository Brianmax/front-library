import "./login.css";
function Login(){
    return (
      <div className="login">
        <div className="loginContainer">
          <form action="post" className="formLogin">
            <label htmlFor="userName">User Name</label>
            <input type="text" /><br />
            <label htmlFor="password">Password</label>
            <input type="password" /><br />
            <button>Login</button>
          </form>
          <div className="links">
            <a href="">Forgot my Password</a>
            <a href="">Go Home</a>
          </div>
        </div>
      </div>
    )
  }

export {Login}