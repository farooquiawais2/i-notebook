import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const HOST_URL = 'http://localhost:5000';


function Login() {

  const [ form, setForm ] = useState( {} );
  const navigate = useNavigate();
  const onChange = ( e ) => {
    setForm( { ...form, [ e.target.name ]: e.target.value } );
    console.log( 'form ', form );
  }
  const submitHandler = async () => {
    const headersList = {
      "Content-Type": "application/json"
    }

    console.log( 'form', form );
    const bodyContent = JSON.stringify( form );

    const response = await fetch( `${ HOST_URL }/api/auth/login`, {
      method: "POST",
      body: bodyContent,
      headers: headersList
    } );

    const data = await response.json();
    localStorage.setItem( 'token', data.authToken );
    navigate( '/' );
    setForm( { email: "", password: "" } );
  }
  return (
    <form>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name={'email'} value={form.email} onChange={onChange} />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Password" name={'password'} value={form.password} onChange={onChange} />
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <div className="btn btn-primary" onClick={submitHandler}>Submit</div>
    </form>
  );
}

export default Login;