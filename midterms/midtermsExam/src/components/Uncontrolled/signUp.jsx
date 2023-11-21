import { useRef } from "react";
import "./uncontrolled.css";

export default function SignUp() {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function handleSignUp(event) {
    event.preventDefault();
    alert(`Successful Sign Up!\n\nName: ${name.current.value}\nEmail: ${email.current.value}\nPasword: ${password.current.value}`)
  }

  return (
    <div className="formContainer">
      <div className="centerDiv">
        <form className="uncontrolled" onSubmit={handleSignUp}>
          <h2>Sign Up</h2>
          <label>
            <input ref={name} type="text" placeholder="Name"/>
          </label>
          
          <label>
            <input ref={email} type="text" placeholder="Email"/>
          </label>

          <label>
            <input ref={password} type="password" placeholder="Password"/>
          </label>

          <button className="uncontrolled__button" type="submit"> Sign Up </button>
        </form>
      </div>
    </div>
  );
}
