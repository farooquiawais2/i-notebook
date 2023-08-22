import { useState } from 'react';
const HOST_URL = 'http://localhost:5000';


function Signup() {

  const [ form, setForm ] = useState( {} );
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

    const response = await fetch( `${ HOST_URL }/api/auth/create-user`, {
      method: "POST",
      body: bodyContent,
      headers: headersList
    } );

    const data = await response.text();
    setForm( { name:"", email: "", password: "" } );
  }
  return (
    <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" name={'name'} placeholder="Name" onChange={onChange} />
    </div>
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

export default Signup;