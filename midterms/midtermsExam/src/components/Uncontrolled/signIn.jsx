import { useRef } from "react";
import "./uncontrolled.css";

export default function SignIn() {
  const email = useRef(null);
  const password = useRef(null);

  function handleSignIn(event) {
    event.preventDefault();
    alert(`Successful Sign In!\n\nEmail: ${email.current.value}\nPasword: ${password.current.value}`)
  }

  return (
    <div className="formContainer">
      <div className="centerDiv">
        <form className="uncontrolled" onSubmit={handleSignIn}>
          <h2>Sign In</h2>
        
          <label>
            <input ref={email} type="text" placeholder="Email"/>
          </label>

          <label>
            <input ref={password} type="password" placeholder="Password"/>
          </label>

          <button className="uncontrolled__button" type="submit"> Sign In </button>
        </form>
      </div>
    </div>
  );
}
