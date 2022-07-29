import { useAuth0 } from '@auth0/auth0-react';
import { useHandleAccessToken } from "../hooks/use-handle-access-token"



const Admin = () => {
  const { login } = useAuth0();

  //destructure to data and methods
  //please reference use-handle-access-token.js file
  const { opts, loading, error, data, getTokenAndTryAgain } = useHandleAccessToken();

  //handling data from use-handle-access-token hook
  //handle loading
  if (loading) {
    return <div>Loading...</div>;
  }

  //handle error
  if (error) {

    //handle login required
    if (error.error === 'login_required') {
      return <button onClick={() => login(opts)}>Login</button>;
    }

    //handle consent required
    if (error.error === 'consent_required') {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }

    //handle error message
    return <div>Oops {error.message}</div>;
  }

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
};

export default Admin;