import './Register.css'

function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
      <input type="text" placeholder='Enter your Name'></input>
      <input type="text" placeholder='Enter your Email'></input>
      <input type="password" placeholder='Enter your Password'></input>
      <input type="password" placeholder='Confirm Password'></input>
      <div className="button">Register</div>
      <div>or</div>
      <div className="button">Login</div>
    </div>
  )
}

export default Register