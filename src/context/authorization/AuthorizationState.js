import AuthorizationContext from './AuthorizationContext';
const HOST_URL = 'http://localhost:3000';

const AuthorizationState = ( props ) => {
  const login = async ( data ) => {
    const headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }

    const bodyContent = JSON.stringify( data );

    const response = await fetch( `${ HOST_URL }/api/auth/login`, {
      method: "POST",
      body: bodyContent,
      headers: headersList
    } );

    const data = await response.text();
    console.log( data );

  }
  const signup = async () => { }
  return (
    <AuthorizationContext.Provider value={{ login, signup }}>
      {props.children}
    </AuthorizationContext.Provider>
  )
}

export default AuthorizationState;