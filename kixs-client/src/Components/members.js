import { useAuth0 } from '@auth0/auth0-react';
import { useApi } from '../hooks/use-api';

const Members = () => {

  const opts = {
    audience: 'https://kixs-api',
    scope: 'read:members',
  };
  const { login, getAccessTokenWithPopup } = useAuth0();
  const {
    loading,
    error,
    refresh
  } = useApi('http://localhost:4000/members', opts); // useApi hook
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
      <li>Success</li>
    </ul>
  );
};

export default Members;