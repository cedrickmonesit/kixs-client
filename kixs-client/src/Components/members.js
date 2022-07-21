import { useAuth0 } from '@auth0/auth0-react';
import { useApi } from '../hooks/use-api';

const Members = () => {

  const opts = {
    audience: process.env.REACT_APP_BACKEND_AUDIENCE,
    scope: process.env.REACT_APP_USER_SCOPE,
  };
  const { login, getAccessTokenWithPopup } = useAuth0();
  const {
    data,
    loading,
    error,
    refresh
  } = useApi(process.env.REACT_APP_API_URL, opts); // useApi hook
  const getTokenAndTryAgain = async () => {
    await getAccessTokenWithPopup(opts);
    refresh();
  };
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    if (error.error === 'login_required') {
      return <button onClick={() => login(opts)}>Login</button>;
    }
    if (error.error === 'consent_required') {
      return (
        <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
      );
    }
    return <div>Oops {error.message}</div>;
  }
  return (
    <ul>
      <li>{data.first}</li>
    </ul>
  );
};

export default Members;